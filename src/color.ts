import {
  rgb2hex,
  hex2rgb,
  rgb2hsv,
  rgb2hsl,
  hsl2rgb,
  rgb2xyz,
  xyz2lab,
  rgb2hwb,
  rgb2hsi,
  lab2lch,
  xyz2xyY,
  rgb2cmyk
} from './convertor'
import { clamp, checkHex, getBrightness } from './utils'
import { cache } from './decorators/cache'
import { roundRes } from './decorators/roundRes'
import { mix } from './utils/mix'
import { getValueByColorName } from './utils/colorNames'
import type { CommonColorTuple, CommonColoraTuple, CmykTuple } from '../typings/colorType'
import { deltaE } from './utils/deltaE'
import type { DeltaEMode, DeltaESetting } from './utils/deltaE'
import { visibility } from './utils/contrast'
import { getOrSet } from './utils/getOrSet'

export class Color {
  private cache = new Map<string, any>()
  private _rgb: [number, number, number] = [0, 0, 0]
  private _alpha = 100
  constructor(rgb: CommonColorTuple | CommonColoraTuple | string, a?: number) {
    if (a !== void 0) {
      this._alpha = clamp(a, 0, 100)
    }
    if (Array.isArray(rgb)) {
      if (rgb.length < 3) throw new Error('Invalid Color')
      for (let i = 0; i < rgb.length; i++) {
        if (i < 3) this._rgb[i] = rgb[i]
        else if (i === 3 && a === void 0) this._alpha = rgb[3] as number
        else break
      }
    } else {
      if (!checkHex(rgb)) {
        rgb = getValueByColorName(rgb, true)
      }
      rgb = hex2rgb(rgb)
      return new Color(rgb, a)
    }
  }

  /**
   * ## Get or set the value of the red channel
   */
  red(): number
  red(amount: number): Color
  red(amount?: number): Color | number {
    return getOrSet(this, 'r', amount)
  }

  /**
   * ## Get or set the value of the green channel
   */
  green(): number
  green(amount: number): Color
  green(amount?: number): Color | number {
    return getOrSet(this, 'g', amount)
  }

  /**
   * ## Get or set the value of the blue channel
   */
  blue(): number
  blue(amount: number): Color
  blue(amount?: number): Color | number {
    return getOrSet(this, 'b', amount)
  }

  /**
   * ## Get or set the value of the alpha channel
   */
  alpha(): number
  alpha(amount: number): Color
  alpha(amount?: number): Color | number {
    if (amount === void 0) return this._alpha
    amount = clamp(amount, 0, 100)
    return new Color(this.rgb(), amount)
  }

  /**
   * ## Increase opacity
   * @param amount The value of opacity increase, the default is 10, which means 10%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns new Color
   */
  fadeIn(amount: number = 10, method?: string): Color {
    amount = method && method === 'relative' ? (this._alpha * amount) / 100 : amount
    return new Color(this.rgb(), clamp(this._alpha + amount, 0, 100))
  }

  /**
   * ## Increase transparency (Reduce opacity)
   * @param amount The value of opacity reduction, the default is 10, which means 10%
   * @param method  If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns Color instance
   */
  fadeOut(amount: number = 10, method?: string): Color {
    amount = method && method === 'relative' ? (this._alpha * amount) / 100 : amount
    return new Color(this.rgb(), clamp(this._alpha - amount, 0, 100))
  }

  opacify(amount: number = 10, method?: string): Color {
    return this.fadeIn(amount, method)
  }

  transparentize(amount: number = 10, method?: string): Color {
    return this.fadeOut(amount, method)
  }

  /**
   * ## get or set hue
   */
  hue(): number
  hue(amount: number): Color
  hue(amount?: number): Color | number {
    return getOrSet(this, 'h', amount)
  }

  /**
   * ## get or set saturation
   */
  saturation(): number
  saturation(amount: number): Color
  saturation(amount?: number): Color | number {
    return getOrSet(this, 's', amount)
  }

  /**
   * ## get or set lightness
   */
  lightness(): number
  lightness(amount: number): Color
  lightness(amount?: number): Color | number {
    return getOrSet(this, 'l', amount)
  }

  @roundRes(0, 1, true, 0)
  @cache('color:rgb')
  rgb(round?: boolean | number): CommonColorTuple {
    return [...this._rgb]
  }

  @roundRes(0, 1, true, 0)
  rgba(round?: boolean | number): CommonColoraTuple {
    return [...this.rgb(false), this._alpha]
  }

  @roundRes(0, 1, true, 0)
  @cache('color:cmyk')
  cmyk(round?: boolean | number): CmykTuple {
    return rgb2cmyk(...this._rgb)
  }

  @roundRes(0, 1, true, 0)
  @cache('color:hsl')
  hsl(round?: boolean | number): CommonColorTuple {
    return rgb2hsl(...this._rgb)
  }

  @roundRes(0, 1, true, 0)
  hsla(round?: boolean | number): CommonColoraTuple {
    return [...this.hsl(false), this._alpha]
  }

  @roundRes(0, 1, true, 0)
  @cache('color:hsv')
  hsv(round?: boolean | number): CommonColorTuple {
    return rgb2hsv(...this._rgb)
  }

  @roundRes(0, 1, true, 0)
  @cache('color:hsi')
  hsi(round?: boolean | number): CommonColorTuple {
    return rgb2hsi(...this._rgb)
  }

  @roundRes(0, 1, true, 0)
  @cache('color: hwb')
  hwb(round?: boolean | number) {
    return rgb2hwb(...this._rgb)
  }

  @roundRes(2, 1, true, 0)
  @cache('color:xyz')
  xyz(round?: boolean | number): CommonColorTuple {
    return rgb2xyz(...this._rgb)
  }

  @roundRes(2, 1, true, 0)
  @cache('color:lab')
  lab(round?: boolean | number): CommonColorTuple {
    return xyz2lab(...this.xyz(false))
  }

  @roundRes(2, 1, true, 0)
  @cache('color:lch')
  lch(round?: boolean | number): CommonColorTuple {
    return lab2lch(...this.lab(false))
  }

  @roundRes(2, 1, true, 0)
  @cache('color:xyY')
  xyY(round?: boolean | number): CommonColorTuple {
    return xyz2xyY(...this.xyz(false))
  }

  /**
   * ## to hex
   * (zh) 转16进制色
   * @param alphaFlag alpha channel display switch
   * - 0: alpha is not displayed. (zh) 不展示alpha值，
   * - 1：alpha is displayed. (zh) 展示alpha值，
   * - 2：alpha is displayed when alpha is not equal to 100%. (zh) 当alpha不等于100%才展示alpha
   * @returns like '#000000'
   */
  hex(alphaFlag: 0 | 1 | 2 = 2): string {
    const alpha =
      alphaFlag === 0
        ? undefined
        : alphaFlag === 1
        ? this._alpha
        : this._alpha === 100
        ? undefined
        : this._alpha
    const cacheKey = `color:hex:param_${alphaFlag}`
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey) as string
    const res = rgb2hex(...this._rgb, alpha)
    this.cache.set(cacheKey, res)
    return res
  }

  /**
   * ## Increase lightness
   * (zh) 增加光亮度
   * @param amount Lightness increase percentage, the default is 5, which means 5%。
   * * (zh) 光亮度增加百分多少, 默认为5，代表5%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value.
   * * (zh) 如果填入relative则表示参数amount为相对值
   * @returns Color Instance
   */
  lighten(amount: number = 5, method?: string): Color {
    let [h, s, l] = this.hsl(false)
    if (method !== void 0 && method === 'relative') {
      l += l * (amount / 100)
    } else {
      l += amount
    }
    l = clamp(l, 0, 100)
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  /**
   * ## Reduce lightness
   * (zh) 减少光亮度
   * @param amount The percentage of lightness reduction, the default is 5, which means 5%.
   * * (zh) 光亮度减少百分多少, 默认为5，代表5%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value.
   * * (zh) 如果填入relative则表示参数amount为相对值
   * @returns Color
   */
  darken(amount: number = 5, method?: string): Color {
    return this.lighten(-amount, method)
  }

  /**
   * ## Increase saturation
   * (zh) 增加饱和度
   * @param amount  How much to increase the saturation, the default is 5, which means 5%.
   * * (zh) 饱和度增加百分多少, 默认为5，代表5%
   * @param method Use the relative value when entering relative
   * * (zh) 如果填入relative则表示参数amount为相对值
   * @returns new Color
   */
  saturate(amount: number = 5, method?: string): Color {
    let [h, s, l] = this.hsl(false)
    if (method !== void 0 && method === 'relative') {
      s += s * (amount / 100)
    } else {
      s += amount
    }
    s = clamp(s, 0, 100)
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  /**
   * ## Reduce saturation
   * 降低饱和度
   * @param amount The percentage of saturation reduction, the default is 5, which means 5%
   * * (zh) 饱和度减少百分多少, 默认为5，代表5%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * * (zh) 如果填入relative则表示参数amount为相对值
   * @returns new Color
   */
  desaturate(amount: number = 5, method?: string): Color {
    return this.saturate(-amount, method)
  }

  /**
   * ## Rotating hue
   * (zh) 旋转色相
   * @param angle Rotation angle
   * * (zh) 旋转角度
   */
  spin(angle: number): Color {
    let [h, s, l] = this.hsl(false)
    h = (h + (angle % 360) + 360) % 360
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  /**
   * ## Rotating hue
   * An alias for the spin method
   *
   * (zh) 旋转色相
   * @param angle Rotation angle
   * * (zh) 旋转角度
   */
  adjustHue(angle: number): Color {
    return this.spin(angle)
  }

  /**
   * ## complementary color
   * (zh) 取得补色
   */
  complement(): Color {
    return this.spin(180)
  }

  /**
   * ## Invert color
   * (zh) 取得反色
   */
  invert(): Color {
    const [r, g, b] = this._rgb.map(v => 255 - v)
    return new Color([r, g, b], this._alpha)
  }

  /**
   * ## color mixing
   * (zh) 颜色混合
   * @param color Another color, which can be a Color instance, a hexadecimal
   * * (zh) 另一个颜色
   * @param weight The mixing ratio of another color, the default value is 50 or 50%
   * * (zh) 另一颜色(参数1)的混合比例，默认值为50即50%
   * @returns Color
   */
  mix(color: Color | string | CommonColoraTuple | CommonColorTuple, weight: number = 50): Color {
    return mix(this, color, 100 - clamp(weight, 0, 100))
  }

  @cache('color:luma')
  luma(): number {
    let [r, g, b] = this._rgb.map(item => {
      item /= 255
      return item <= 0.03928 ? item / 12.92 : Math.pow((item + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  /**
   * ## get Brightness
   * range: [0, 100]
   */
  brightness(): number {
    const [r, g, b] = this._rgb
    return getBrightness(r, g, b)
  }
  /**
   * ## deltaE
   * (zh) 色差
   * @param sampleColor (zh) 样品颜色
   * @param mode The default is CMC, Choose one from CMC | CIE2000 | CIE1994 | CIE1976
   * @param setting Mode Setting
    - CMC: { l: number, c: number }
    - CIE2000: { kL: number; kC: number; kH: number }
    - CIE1994: { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' }
     */
  deltaE(sampleColor: Color, mode: DeltaEMode = 'CMC', setting?: DeltaESetting): number {
    return deltaE(this, sampleColor, mode, setting)
  }

  /**
   * ## Checks if one color is easily visible over another
   * （zh）检查一个颜色在别一个颜色上是否易于可见
   * > https://www.w3.org/TR/AERT/#color-contrast
   *
   * @param anotherColor color for contrast
   * @param setting Setting value judged as poor visibility,{b, c}. （zh）判为差可见性的设置值 {b, c}
   * * b: brightness difference, the default value is 125, the range of brightness value is [0,255]
   * * c: color difference, the default value is 500
   * @returns {boolean} false时则为可见性比较差
   */
  visibility(
    anotherColor: Color | string | CommonColoraTuple | CommonColorTuple,
    setting?: { b: number; c: number }
  ): boolean {
    return visibility(this, anotherColor, setting)
  }
}

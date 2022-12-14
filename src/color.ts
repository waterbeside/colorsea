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
import { clamp, checkHex } from './utils'
import { cache } from './decorators/cache'
import { roundRes } from './decorators/roundRes'
import { mix } from './utils/mix'
import { getValueByColorName } from './utils/colorNames'
import type {
  ColorBaseProp,
  CommonColorTuple,
  CommonColoraTuple,
  CmykTuple
} from '../typings/colorType'

import { deltaE } from './utils/deltaE'
import type { DeltaEMode, DeltaESetting } from './utils/deltaE'

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

  red(): number
  red(amount: number): Color
  red(amount?: number): Color | number {
    return getOrChange(this, 'r', amount)
  }

  green(): number
  green(amount: number): Color
  green(amount?: number): Color | number {
    return getOrChange(this, 'g', amount)
  }

  blue(): number
  blue(amount: number): Color
  blue(amount?: number): Color | number {
    return getOrChange(this, 'b', amount)
  }

  alpha(): number
  alpha(amount: number): Color
  alpha(amount?: number): Color | number {
    if (amount === void 0) return this._alpha
    amount = clamp(amount, 0, 100)
    return new Color(this.rgb(), amount)
  }

  fadeIn(amount: number = 10, method?: string): Color {
    amount = method && method === 'relative' ? (this._alpha * amount) / 100 : amount
    return new Color(this.rgb(), clamp(this._alpha + amount, 0, 100))
  }

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

  hue(): number
  hue(amount: number): Color
  hue(amount?: number): Color | number {
    return getOrChange(this, 'h', amount)
  }

  saturation(): number
  saturation(amount: number): Color
  saturation(amount?: number): Color | number {
    return getOrChange(this, 's', amount)
  }

  lightness(): number
  lightness(amount: number): Color
  lightness(amount?: number): Color | number {
    return getOrChange(this, 'l', amount)
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
   * to hex
   * ???16?????????
   * @param alphaFlag 
    ```
      0: alpha is not displayed. ?????????alpha??????
      1???alpha is displayed. ??????alpha??????
      2???alpha is displayed when alpha is not equal to 100%. ???alpha?????????100%?????????alpha
    ```
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
   * Increase lightness
   * ???????????????
   * @param amount ???????????????????????????, ?????????5?????????5%
   * @param method ????????????relative???????????????amount????????????
   * @returns Color
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
   * Reduce lightness
   * ???????????????
   * @param amount ???????????????????????????, ?????????5?????????5%
   * @param method ????????????relative???????????????amount????????????
   * @returns Color
   */
  darken(amount: number = 5, method?: string): Color {
    return this.lighten(-amount, method)
  }

  /**
   * Increase saturation
   * ???????????????
   * @param amount Between 0 and 100
   * @param method Use the relative value when entering relative
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
   * Reduce saturation
   * ???????????????
   * @param amount Between 0 and 100
   * @param method Use the relative value when entering relative
   * @returns new Color
   */
  desaturate(amount: number = 5, method?: string): Color {
    return this.saturate(-amount, method)
  }

  /**
   * Rotating hue
   * ????????????
   * @param angle rotation angle ????????????
   */
  spin(angle: number): Color {
    let [h, s, l] = this.hsl(false)
    h = (h + (angle % 360) + 360) % 360
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  adjustHue(angle: number): Color {
    return this.spin(angle)
  }

  /**
   * ????????????
   */
  complement(): Color {
    return this.spin(180)
  }

  /**
   * ????????????
   */
  invert(): Color {
    const [r, g, b] = this._rgb.map(v => 255 - v)
    return new Color([r, g, b], this._alpha)
  }

  /**
   * mix color
   * ????????????
   * @param color ???????????????
   * @param weight ??????????????????????????????????????????50???50%
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
   * deltaE
   * ??????
   * @param sampleColor ????????????
   * @param mode The default is CMC, Choose one from CMC | CIE2000 | CIE1994 | CIE1976
   * @param setting Mode Setting
    - CMC: { l: number, c: number }
    - CIE2000: { kL: number; kC: number; kH: number }
    - CIE1994: { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' }
     */
  deltaE(sampleColor: Color, mode: DeltaEMode = 'CMC', setting?: DeltaESetting): number {
    return deltaE(this, sampleColor, mode, setting)
  }
}

function getOrChange(
  color: Color,
  type: ColorBaseProp,
  amount?: number | undefined
): number | Color {
  const clamp01 = (v: number) => clamp(v, 0, 100)
  const clamp0255 = (v: number) => clamp(v, 0, 255)
  const typeDict: { [key in ColorBaseProp]: [number, (v: number) => number] } = {
    h: [0, (v: number) => v % 360],
    s: [1, clamp01],
    l: [2, clamp01],
    r: [0, clamp0255],
    g: [1, clamp0255],
    b: [2, clamp0255]
  }
  let rgb: [number, number, number]
  const idx = typeDict[type][0]
  if (['h', 's', 'l'].includes(type)) {
    const hsl = color.hsl()
    if (amount === void 0) return hsl[idx]
    amount = typeDict[type][1](amount)
    hsl[idx] = amount
    rgb = hsl2rgb(...hsl)
  } else {
    rgb = color.rgb()
    if (amount === void 0) return rgb[idx]
    amount = typeDict[type][1](amount)
    rgb[idx] = amount
  }
  return new Color(rgb, color.alpha())
}

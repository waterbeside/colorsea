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
  xyz2xyY
} from './convertor'
import { clamp } from './utils'
import { cache } from './decorators/cache'
import { roundRes } from './decorators/roundRes'
import { mix } from './utils/mix'
import type { ColorBaseProp, CommonColorTuple, CommonColoraTuple } from '../typings/colorType'

export class Color {
  private cache = new Map<string, any>()
  private _rgb: [number, number, number] = [0, 0, 0]
  private _alpha = 1
  constructor(rgb: CommonColorTuple | CommonColoraTuple | string, a?: number) {
    if (a !== void 0) {
      this._alpha = clamp(a, 0, 1)
    }
    if (Array.isArray(rgb)) {
      if (rgb.length < 3) throw new Error('Invalid Color')
      for (let i = 0; i < rgb.length; i++) {
        if (i < 3) this._rgb[i] = rgb[i]
        else if (i === 3 && a === void 0) this._alpha = rgb[3] as number
        else break
      }
    } else {
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
    amount = clamp(amount, 0, 1)
    return new Color(this.rgb(), amount)
  }

  fadeIn(amount: number = 0.1, method?: string): Color {
    amount = method && method === 'relative' ? this._alpha * amount : amount
    return new Color(this.rgb(), clamp(this._alpha + amount, 0, 1))
  }

  fadeOut(amount: number = 0.1, method?: string): Color {
    amount = method && method === 'relative' ? this._alpha * amount : amount
    return new Color(this.rgb(), clamp(this._alpha - amount, 0, 1))
  }

  opacity(amount: number = 0.1, method?: string): Color {
    return this.fadeIn(amount, method)
  }

  transparentize(amount: number = 0.1, method?: string): Color {
    return this.fadeOut(amount)
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

  @roundRes(0, 1)
  @cache('color:rgb')
  rgb(round: boolean | number = true): CommonColorTuple {
    return this._rgb.map(v => Math.round(v)) as CommonColorTuple
  }

  rgba(): CommonColoraTuple {
    return [...this.rgb(), this._alpha]
  }

  @roundRes([0, 2, 2], 0)
  @cache('color:hsl')
  hsl(round: boolean | number = true): CommonColorTuple {
    return rgb2hsl(...this._rgb)
  }

  hsla(round: boolean | number = true): CommonColoraTuple {
    return [...this.hsl(round), this._alpha]
  }

  @roundRes([0, 2, 2], 0)
  @cache('color:hsv')
  hsv(round: boolean | number = true): CommonColorTuple {
    return rgb2hsv(...this._rgb)
  }

  @roundRes([0, 2, 2], 0)
  @cache('color:hsi')
  hsi(round: boolean | number = true): CommonColorTuple {
    return rgb2hsi(...this._rgb)
  }

  @roundRes([0, 2, 2], 0)
  @cache('color: hwb')
  hwb(round: boolean | number = true) {
    return rgb2hwb(...this._rgb)
  }

  @roundRes(2, 1)
  @cache('color:xyz')
  xyz(round: boolean | number = true): CommonColorTuple {
    return rgb2xyz(...this._rgb)
  }

  @roundRes(2, 1)
  @cache('color:lab')
  lab(round: boolean | number = true): CommonColorTuple {
    return xyz2lab(...this.xyz(false))
  }

  @roundRes(2, 1)
  @cache('color:lch')
  lch(round: boolean | number = true): CommonColorTuple {
    return lab2lch(...this.lab(false))
  }

  @roundRes(2, 1)
  @cache('color:xyY')
  xyY(round: boolean | number = true): CommonColorTuple {
    return xyz2xyY(...this.xyz(false))
  }

  /**
   * 转16进制色
   * @param alphaFlag 0:不展示alpha值，1：展示alpha值，2：当alpha不等于一时才展示alpha
   * @returns like '#000000'
   */
  hex(alphaFlag: 0 | 1 | 2 = 2): string {
    const alpha =
      alphaFlag === 0
        ? undefined
        : alphaFlag === 1
        ? this._alpha
        : this._alpha === 1
        ? undefined
        : this._alpha
    const cacheKey = `color:hex:param_${alphaFlag}`
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey) as string
    const res = rgb2hex(...this._rgb, alpha)
    this.cache.set(cacheKey, res)
    return res
  }

  lighten(amount: number = 0.1, method?: string) {
    let [h, s, l] = this.hsl(false)
    if (method !== void 0 && method === 'relative') {
      l += l * amount
    } else {
      l += amount
    }
    l = clamp(l, 0, 1)
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  darken(amount: number = 0.1, method?: string) {
    return this.lighten(-amount, method)
  }

  /**
   * Increased saturation
   * 增加饱和度
   * @param amount Between 0 and 1
   * @param method Use the relative value when entering relative
   * @returns new Color
   */
  saturate(amount: number = 0.1, method?: string) {
    let [h, s, l] = this.hsl(false)
    if (method !== void 0 && method === 'relative') {
      s += s * amount
    } else {
      s += amount
    }
    s = clamp(s, 0, 1)
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  desaturate(amount: number = 0.1, method?: string) {
    return this.saturate(-amount, method)
  }

  /**
   * Modify the hue
   * 旋转色相
   * @param angle rotation angle 旋转角度
   */
  spin(angle: number): Color {
    let [h, s, l] = this.hsl(false)
    h = (h + (angle % 360) + 360) % 360
    return new Color(hsl2rgb(h, s, l), this._alpha)
  }

  mix(color: Color | string | CommonColoraTuple | CommonColorTuple, weight: number = 0.5): Color {
    return mix(this, color, 1 - clamp(weight, 0, 1))
  }

  @cache('color:luma')
  luma(): number {
    let [r, g, b] = this._rgb.map(item => item / 255)
    r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
    g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
    b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
}

function getOrChange(
  color: Color,
  type: ColorBaseProp,
  amount?: number | undefined
): number | Color {
  const clamp01 = (v: number) => clamp(v, 0, 1)
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

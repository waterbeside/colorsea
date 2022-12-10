import { rgb2hex, hex2rgb } from './utils/convertor'
import { clampInRange } from './utils'

export class Color {
  private _rgb = [0, 0, 0]
  private _alpha = 1
  constructor(rgb: string | number[], a?: number) {
    if (a !== void 0) {
      this._alpha = clampInRange(a, 0, 1) 
    }
    if (Array.isArray(rgb)) {
      if (rgb.length < 3) throw new Error('Invalid Color')
      this._rgb = rgb.slice(0, 3)
      if (rgb.length > 3 && a === void 0) {
        this._alpha = rgb[4]
      }
    } else {
      rgb = hex2rgb(rgb)
      return new Color(rgb, a)
    }
  }
}
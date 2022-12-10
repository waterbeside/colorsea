import { rgb2hex, hex2rgb } from './utils/convertor'
import { clampInRange } from './utils'

export class Color {
  private _rgb: [number, number, number] = [0, 0, 0]
  private _alpha = 1
  constructor(rgb: string | number[], a?: number) {
    if (a !== void 0) {
      this._alpha = clampInRange(a, 0, 1)
    }
    if (Array.isArray(rgb)) {
      if (rgb.length < 3) throw new Error('Invalid Color')
      for (let i = 0; i < rgb.length; i++) {
        if (i < 3) this._rgb[i] = rgb[i]
        else if (i === 3 && a === void 0) this._alpha = rgb[3]
        else break
      }
    } else {
      rgb = hex2rgb(rgb)
      return new Color(rgb, a)
    }
  }

  rgb() {
    return [...this._rgb]
  }

  rgba() {
    return [...this._rgb, this._alpha]
  }

  hex() {
    return rgb2hex(...this._rgb, this._alpha === 1 ? undefined : this._alpha)
  }
}

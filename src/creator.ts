import { Color } from './color'
import { hsl2rgb, hsv2rgb, xyz2rgb, lab2rgb, hwb2rgb } from './convertor'

export default {
  rgb(r: number, g: number, b: number, alpha?: number): Color {
    return new Color([r, g, b], alpha)
  },
  hsl(h: number, s: number, l: number, alpha?: number): Color {
    return new Color(hsl2rgb(h, s, l), alpha)
  },
  hsv(h: number, s: number, v: number, alpha?: number): Color {
    return new Color(hsv2rgb(h, s, v), alpha)
  },
  xyz(x: number, y: number, z: number, alpha?: number): Color {
    return new Color(xyz2rgb(x, y, z), alpha)
  },
  lab(l: number, a: number, b: number, alpha?: number): Color {
    return new Color(lab2rgb(l, a, b), alpha)
  },
  hwb(h: number, a: number, b: number, alpha?: number): Color {
    return new Color(hwb2rgb(h, a, b), alpha)
  }
}

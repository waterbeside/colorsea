import { Color } from './color'
import {
  cmyk2rgb,
  hsl2rgb,
  hsv2rgb,
  xyz2rgb,
  lab2rgb,
  hwb2rgb,
  hsi2rgb,
  lch2xyz
} from './convertor'

export default {
  rgb(r: number, g: number, b: number, alpha?: number): Color {
    return new Color([r, g, b], alpha)
  },
  cmyk(c: number, m: number, y: number, k: number, alpha?: number): Color {
    return new Color(cmyk2rgb(c, m, y, k), alpha)
  },
  hsl(h: number, s: number, l: number, alpha?: number): Color {
    return new Color(hsl2rgb(h, s, l), alpha)
  },
  hsv(h: number, s: number, v: number, alpha?: number): Color {
    return new Color(hsv2rgb(h, s, v), alpha)
  },
  hsi(h: number, s: number, i: number, alpha?: number): Color {
    return new Color(hsi2rgb(h, s, i), alpha)
  },
  hwb(h: number, a: number, b: number, alpha?: number): Color {
    return new Color(hwb2rgb(h, a, b), alpha)
  },
  xyz(x: number, y: number, z: number, alpha?: number): Color {
    return new Color(xyz2rgb(x, y, z), alpha)
  },
  lab(l: number, a: number, b: number, alpha?: number): Color {
    return new Color(lab2rgb(l, a, b), alpha)
  },
  lch(l: number, c: number, h: number, alpha?: number): Color {
    return new Color(xyz2rgb(...lch2xyz(l, c, h)), alpha)
  }
}

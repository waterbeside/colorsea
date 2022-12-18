import { CommonColorTuple } from '../../typings/colorType'
import { lab2rgb, rgb2lab } from './rgbLab'
import { lab2lch, lch2lab } from './labLch'

export const rgb2lch = function (r: number, g: number, b: number): CommonColorTuple {
  return lab2lch(...rgb2lab(r, g, b))
}

export const lch2rgb = function (l: number, c: number, h: number): CommonColorTuple {
  return lab2rgb(...lch2lab(l, c, h))
}

import { xyz2lab, lab2xyz } from './xyzLab'
import { rgb2xyz, xyz2rgb } from './rgbXyz'

export const rgb2lab = function (r: number, g: number, b: number) {
  return xyz2lab(...rgb2xyz(r, g, b))
}

export const lab2rgb = function (l: number, a: number, b: number) {
  return xyz2rgb(...lab2xyz(l, a, b))
}

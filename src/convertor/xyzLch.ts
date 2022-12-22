import { CommonColorTuple } from '../../typings/colorType'
import { xyz2lab, lab2xyz } from './xyzLab'
import { lab2lch, lch2lab } from './labLch'

export const xyz2lch = function (x: number, y: number, z: number): CommonColorTuple {
  return lab2lch(...xyz2lab(x, y, z))
}

export const lch2xyz = function (l: number, c: number, h: number): CommonColorTuple {
  return lab2xyz(...lch2lab(l, c, h))
}

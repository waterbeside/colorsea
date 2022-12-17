import { LAB_CONST } from '../constants/lab'
import type { LabType, XyzType } from '../../typings/colorType'

export const xyz2lab = function (x: number, y: number, z: number): LabType {
  x = x / LAB_CONST.x / 100
  y = y / LAB_CONST.y / 100
  z = z / LAB_CONST.z / 100
  ;[x, y, z] = [x, y, z].map(i => {
    if (i > LAB_CONST.eps) return Math.pow(i, 1 / 3)
    else return (LAB_CONST.k * i + 16) / 116
  })
  const l = Math.max(0, 116 * y - 16)
  const a = 500 * (x - y)
  const b = 200 * (y - z)
  return [l, a, b]
}

export const lab2xyz = function (l: number, a: number, b: number): XyzType {
  let y = (l + 16) / 116
  let x = isNaN(a) ? y : y + a / 500
  let z = isNaN(b) ? y : y - b / 200
  ;[x, y, z] = [x, y, z].map(i => {
    if (i > LAB_CONST.t) return Math.pow(i, 3)
    return (i * 116 - 16) / LAB_CONST.k
  })
  return [x * LAB_CONST.x * 100, y * LAB_CONST.y * 100, z * LAB_CONST.z * 100]
}

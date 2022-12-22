import type { CommonColorTuple } from '../../typings/colorType'

export const xyz2xyY = function (x: number, y: number, z: number): CommonColorTuple {
  const sum = x + y + z
  let xx = 0,
    yy = 0
  if (sum > 0) {
    xx = x / sum
    yy = y / sum
  }
  return [xx, yy, y]
}

export const xyY2xyz = function (xx: number, yy: number, y: number): CommonColorTuple {
  if (yy === 0) return [0, 0, 0]
  return [(xx * y) / yy, y, ((1 - xx - yy) * y) / yy]
}

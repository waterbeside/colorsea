import { CommonColorTuple } from '../../typings/colorType'
import { clamp } from '../utils'

export const lab2lch = function (l: number, a: number, b: number): CommonColorTuple {
  a = clamp(a, -100, 100)
  b = clamp(b, -100, 100)
  const c = Math.sqrt(a * a + b * b)
  let h = ((180 * Math.atan2(b, a)) / Math.PI + 360) % 360

  if (Math.round(c * 10000) === 0) h = Number.NaN
  return [l, c, h]
}

export const lch2lab = function (l: number, c: number, h: number): CommonColorTuple {
  if (isNaN(h)) h = 0
  h *= Math.PI / 180
  return [l, Math.cos(h) * c, Math.sin(h) * c]
}

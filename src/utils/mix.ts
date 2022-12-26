import { Color } from '../color'
import { clamp } from '../utils/'
import type { CommonColorTuple, CommonColoraTuple } from '../../typings/colorType'

export const mix = function (
  color1: Color | string | CommonColoraTuple | CommonColorTuple,
  color2: Color | string | CommonColoraTuple | CommonColorTuple,
  weight: number
) {
  const c1 = color1 instanceof Color ? color1 : new Color(color1)
  const c2 = color2 instanceof Color ? color2 : new Color(color2)
  weight /= 100
  const w = clamp(weight, 0, 1) * 2 - 1
  const d = c1.alpha() - c2.alpha()

  const combinedWeight1 = w * d == -1 ? w : (w + d) / (1 + w * d)
  const w1 = (combinedWeight1 + 1) / 2
  const w2 = 1 - w1

  const rgb: CommonColorTuple = [
    Math.round(clamp(c1.red() * w1 + c2.red() * w2, 0, 255)),
    Math.round(clamp(c1.green() * w1 + c2.green() * w2, 0, 255)),
    Math.round(clamp(c1.blue() * w1 + c2.blue() * w2, 0, 255))
  ]
  return new Color(rgb, c1.alpha() * w + c2.alpha() * (1 - w))
}

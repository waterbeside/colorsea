import { Color } from '../color'
import { clamp } from '../utils/'
import type { CommonColorTuple, CommonColoraTuple } from '../../typings/colorType'

/**
 * reference: https://github.com/sass/dart-sass/
 */
export const mix = function (
  color1: Color | string | CommonColoraTuple | CommonColorTuple,
  color2: Color | string | CommonColoraTuple | CommonColorTuple,
  weight: number
) {
  const c1 = color1 instanceof Color ? color1 : new Color(color1)
  const c2 = color2 instanceof Color ? color2 : new Color(color2)
  const wScale = clamp(weight, 0, 100) / 100
  const w = wScale * 2 - 1
  const d = c1.alpha() - c2.alpha()

  const combinedWeight1 = w * d == -1 ? w : (w + d) / (1 + w * d)
  const w1 = (combinedWeight1 + 1) / 2
  const w2 = 1 - w1

  const rgb: CommonColorTuple = [
    Math.round(clamp(c1.red() * w1 + c2.red() * w2, 0, 255)),
    Math.round(clamp(c1.green() * w1 + c2.green() * w2, 0, 255)),
    Math.round(clamp(c1.blue() * w1 + c2.blue() * w2, 0, 255))
  ]
  const alpha = c1.alpha() * wScale + c2.alpha() * (1 - wScale)
  return new Color(rgb, alpha)
}

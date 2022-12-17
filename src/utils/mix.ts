import { Color } from '../color'
import { clamp } from '../utils/'
import type { RgbaType, RgbType } from '../../typings/colorType'

export const mix = function (
  color1: Color | string | RgbaType | RgbType,
  color2: Color | string | RgbaType | RgbType,
  weight: number
) {
  const c1 = color1 instanceof Color ? color1 : new Color(color1)
  const c2 = color2 instanceof Color ? color2 : new Color(color2)
  const w = clamp(weight, 0, 1) * 2 - 1
  const d = c1.alpha() - c2.alpha()

  const combinedWeight1 = w * d == -1 ? w : (w + d) / (1 + w * d)
  const w1 = (combinedWeight1 + 1) / 2
  const w2 = 1 - w1

  const rgb: RgbType = [
    Math.round(clamp(c1.red() * w1 + c2.red() * w2, 0, 255)),
    Math.round(clamp(c1.green() * w1 + c2.green() * w2, 0, 255)),
    Math.round(clamp(c1.blue() * w1 + c2.blue() * w2, 0, 255))
  ]
  return new Color(rgb, c1.alpha() * w + c2.alpha() * (1 - w))
}

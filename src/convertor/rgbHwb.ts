import { roundFixed } from '../utils'
import { rgb2hsl, hsl2rgb } from './rgbHslHsv'
import { HslType, RgbType } from '../../typings/colorType'

export const rgb2hwb = function (r: number, g: number, b: number): HslType {
  const [h] = rgb2hsl(r, g, b)
  const w = roundFixed((Math.min(r, g, b) / 255) * 100, 2)
  const bb = roundFixed((1 - Math.max(r, g, b) / 255) * 100, 2)
  return [h, w, bb]
}

export function hwb2rgb(h: number, w: number, b: number): RgbType {
  return hsl2rgb(h, 100, 50).map(c => (c * (100 - w - b)) / 100 + h) as RgbType
}

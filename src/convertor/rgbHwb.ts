import { rgb2hsl, hsl2rgb } from './rgbHsx'
import { CommonColorTuple } from '../../typings/colorType'

export const rgb2hwb = function (r: number, g: number, b: number): CommonColorTuple {
  const [h] = rgb2hsl(r, g, b)
  const w = Math.min(r, g, b) / 255
  const bb = 1 - Math.max(r, g, b) / 255
  return [h, w * 100, bb * 100]
}

export function hwb2rgb(h: number, w: number, b: number): CommonColorTuple {
  w /= 100
  b /= 100
  return hsl2rgb(h, 100, 50).map(c => ((c / 255) * (1 - w - b) + w) * 255) as CommonColorTuple
}

import { rgb2hsl, hsl2rgb } from './rgbHsx'
import { CommonColorTuple } from '../../typings/colorType'

export const rgb2hwb = function (r: number, g: number, b: number): CommonColorTuple {
  const [h] = rgb2hsl(r, g, b)
  const w = (Math.min(r, g, b) / 255) * 100
  const bb = (1 - Math.max(r, g, b) / 255) * 100
  return [h, w, bb]
}

export function hwb2rgb(h: number, w: number, b: number): CommonColorTuple {
  return hsl2rgb(h, 100, 50).map(c => (c * (100 - w - b)) / 100 + h) as CommonColorTuple
}

import { rgb2hsl, hsl2rgb } from './rgbHsx'
import { CommonColorTuple } from '../../typings/colorType'

export const rgb2hwb = function (r: number, g: number, b: number): CommonColorTuple {
  const [h] = rgb2hsl(r, g, b)
  const w = Math.min(r, g, b) / 255
  const bb = 1 - Math.max(r, g, b) / 255
  return [h, w, bb]
}

export function hwb2rgb(h: number, w: number, b: number): CommonColorTuple {
  return hsl2rgb(h, 1, 0.5).map(c => ((c / 255) * (1 - w - b) + w) * 255) as CommonColorTuple
}

import type { CommonColorTuple } from '../../typings/colorType'

export const rgb2linear = function (r: number, g: number, b: number): CommonColorTuple {
  return [r, g, b].map(c => {
    c /= 255
    return c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92
  }) as CommonColorTuple
}

export const linear2rgb = function (r: number, g: number, b: number): CommonColorTuple {
  return [r, g, b].map(c => {
    return 255 * (c <= 0.00304 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)
  }) as CommonColorTuple
}

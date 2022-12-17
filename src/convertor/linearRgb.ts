import type { RgbType } from '../../typings/colorType'

export const rgb2linear = function (r: number, g: number, b: number): RgbType {
  return [r, g, b].map(c => {
    c /= 255
    console.log('c', c)
    return c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92
  }) as RgbType
}

export const linear2rgb = function (r: number, g: number, b: number): RgbType {
  return [r, g, b].map(c => {
    return Math.round(255 * (c <= 0.00304 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055))
  }) as RgbType
}

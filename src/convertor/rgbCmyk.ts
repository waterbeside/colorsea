import type { CommonColorTuple, CmykTuple } from '../../typings/colorType'

export const rgb2cmyk = function (r: number, g: number, b: number): CmykTuple {
  ;[r, g, b] = [r, g, b].map(v => v / 255)
  const k = 1 - Math.max(r, g, b)
  const f = k < 1 ? 1 / (1 - k) : 0
  const c = (1 - r - k) * f * 100
  const m = (1 - g - k) * f * 100
  const y = (1 - b - k) * f * 100
  return [c, m, y, k * 100]
}

export const cmyk2rgb = function (c: number, m: number, y: number, k: number): CommonColorTuple {
  if (k === 100) return [0, 0, 0]
  k /= 100
  return [c, m, y].map(v => {
    v /= 100
    return v >= 1 ? 0 : 255 * (1 - v) * (1 - k)
  }) as CommonColorTuple
}

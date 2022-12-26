import { clamp } from '../utils'
import type { CommonColorTuple } from '../../typings/colorType'

export function rgb2hue(r: number, g: number, b: number, isHsiHue: boolean = false) {
  ;[r, g, b] = [r, g, b].map(item => item / 255)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h: number = 0

  if (max !== min) {
    if (isHsiHue) {
      h = (r - g + (r - b)) / 2
      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b))
      h = Math.acos(h)
      if (b > g) {
        h = Math.PI * 2 - h
      }
      h /= Math.PI * 2
    } else {
      const d = max - min
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
      else if (max === g) h = (b - r) / d + 2
      else h = (r - g) / d + 4 // max === b
      h /= 6
    }
  } else {
    h = NaN
  }
  h = h * 360
  return h
}

function rgb2hsx(r: number, g: number, b: number, vl: 'l' | 'v' | 'i' = 'l'): CommonColorTuple {
  ;[r, g, b] = [r, g, b].map(item => item / 255)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h: number = rgb2hue(r, g, b, vl === 'i')
  let s: number = 0
  let l = (max + min) / 2
  const d = max - min
  let v = max
  let i = (r + g + b) / 3
  if (vl === 'v') s = max === 0 ? 0 : d / max
  if (max !== min && vl === 'l') s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  if (vl === 'i') s = i > 0 ? 1 - min / i : 0
  s *= 100
  l *= 100
  v *= 100
  i *= 100
  return vl === 'l' ? [h, s, l] : vl === 'v' ? [h, s, v] : [h, s, i]
}

export const rgb2hsl = function (r: number, g: number, b: number): CommonColorTuple {
  return rgb2hsx(r, g, b, 'l')
}

export const hsl2rgb = function (h: number, s: number, l: number): CommonColorTuple {
  let m1: number
  let m2: number

  const hue = (h: number) => {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h
    if (h * 6 < 1) {
      return m1 + (m2 - m1) * h * 6
    } else if (h * 2 < 1) {
      return m2
    } else if (h * 3 < 2) {
      return m1 + (m2 - m1) * (2 / 3 - h) * 6
    } else {
      return m1
    }
  }

  h = (h % 360) / 360
  s = clamp(s / 100, 0, 1)
  l = clamp(l / 100, 0, 1)

  m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s
  m1 = l * 2 - m2

  return [hue(h + 1 / 3) * 255, hue(h) * 255, hue(h - 1 / 3) * 255]
}

export const rgb2hsv = function (r: number, g: number, b: number): CommonColorTuple {
  return rgb2hsx(r, g, b, 'v')
}

export const hsv2rgb = function (h: number, s: number, v: number): CommonColorTuple {
  h = ((h % 360) / 360) * 360
  s /= 100
  v /= 100

  let i
  let f
  i = Math.floor((h / 60) % 6)
  f = h / 60 - i

  const vs = [v, v * (1 - s), v * (1 - f * s), v * (1 - (1 - f) * s)]
  const perm = [
    [0, 3, 1],
    [2, 0, 1],
    [1, 0, 3],
    [1, 2, 0],
    [3, 1, 0],
    [0, 1, 2]
  ]
  return [vs[perm[i][0]] * 255, vs[perm[i][1]] * 255, vs[perm[i][2]] * 255]
}

export const rgb2hsi = function (r: number, g: number, b: number): CommonColorTuple {
  return rgb2hsx(r, g, b, 'i')
}

export const hsi2rgb = function (h: number, s: number, i: number): CommonColorTuple {
  let r, g, b
  s /= 100
  i /= 100

  if (isNaN(h)) h = 0
  if (isNaN(s)) s = 0
  h = ((360 + h) % 360) / 360

  const x = (h: number) =>
    (1 + (s * Math.cos(Math.PI * 2 * h)) / Math.cos(Math.PI / 3 - Math.PI * 2 * h)) / 3

  if (h < 1 / 3) {
    b = (1 - s) / 3
    r = x(h)
    g = 1 - (b + r)
  } else if (h < 2 / 3) {
    h -= 1 / 3
    r = (1 - s) / 3
    g = x(h)
    b = 1 - (r + g)
  } else {
    h -= 2 / 3
    g = (1 - s) / 3
    b = x(h)
    r = 1 - (g + b)
  }
  ;[r, g, b] = [r, g, b].map(v => clamp(i * v * 3, 0, 1) * 255)
  return [r, g, b]
}

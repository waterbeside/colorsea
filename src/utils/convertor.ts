import { clamp, colorHex } from './index'
import { XYZ_RGB, RGB_XYZ, LAB_CONST } from '../constants/lab'

const rgb2percent255 = (r: number, g: number, b: number): [number, number, number] => {
  r = r / 255
  g = g / 255
  b = b / 255
  return [r, g, b]
}

export const rgb2hex = function (r: number, g: number, b: number, a?: number) {
  const arr = [r, g, b]
  let hex = '#'
  const toHex = (c: number) => clamp(c, 0, 255).toString(16).padStart(2, '0')
  for (let i = 0; i < arr.length; i++) hex += toHex(arr[i])
  if (a != void 0) hex += (clamp(a, 0, 1) * 255).toString(16).padStart(2, '0')
  return hex
}

export const hex2rgb = function (hexString: string): RgbType | RgbaType {
  hexString = colorHex(hexString).padEnd(8, 'ff')
  const matched = hexString.match(/.{2}/g)
  if (!matched) return [0, 0, 0, 1]
  const rgb: [number, number, number] = [0, 0, 0]
  let a: boolean | number = false
  matched.forEach((c, i) => {
    if (i < 3) rgb[i] = parseInt(c, 16)
    else a = parseInt(c, 16) / 255
  })
  return a === false ? rgb : [...rgb, a]
}

function rgb2hslOrhsv(
  r: number,
  g: number,
  b: number,
  a: number | undefined,
  vl: 'l'
): { h: number; s: number; l: number; a: number }
function rgb2hslOrhsv(
  r: number,
  g: number,
  b: number,
  a: number | undefined,
  vl: 'v'
): { h: number; s: number; v: number; a: number }
function rgb2hslOrhsv(
  r: number,
  g: number,
  b: number,
  a: number = 1,
  vl: 'l' | 'v' = 'l'
): { h: number; s: number; v: number; a: number } | { h: number; s: number; l: number; a: number } {
  ;[r, g, b] = rgb2percent255(r, g, b)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h: number = 0
  let s: number = 0
  const l = (max + min) / 2
  const d = max - min
  const v = max
  if (vl === 'v') s = max === 0 ? 0 : d / max

  if (max !== min) {
    if (vl === 'l') s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
    else if (max === g) h = (b - r) / d + 2
    else h = (r - g) / d + 4 // max === b
    h /= 6
  }
  if (r === g && g === b) h = NaN
  return vl === 'l' ? { h: h * 360, s, l, a } : { h: h * 360, s, v, a }
}

export const rgb2hsl = function (r: number, g: number, b: number): HslType {
  const { h, s, l } = rgb2hslOrhsv(r, g, b, 1, 'l')
  return [h, s, l]
}

export const hsl2rgb = function (h: number, s: number, l: number): RgbType {
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
  s = clamp(s, 0, 1)
  l = clamp(l, 0, 1)

  m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s
  m1 = l * 2 - m2

  return [
    Math.round(hue(h + 1 / 3) * 255),
    Math.round(hue(h) * 255),
    Math.round(hue(h - 1 / 3) * 255)
  ]
}

export const hsv2rgb = function (h: number, s: number, v: number): RgbType {
  h = ((h % 360) / 360) * 360

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
  return [
    Math.round(vs[perm[i][0]] * 255),
    Math.round(vs[perm[i][1]] * 255),
    Math.round(vs[perm[i][2]] * 255)
  ]
}

export const rgb2hsv = function (r: number, g: number, b: number): HslType {
  const { h, s, v } = rgb2hslOrhsv(r, g, b, 1, 'v')
  return [h, s, v]
}

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

export const rgb2xyz = function (r: number, g: number, b: number): XyzType {
  // Calibration for observer @2° with illumination = D65
  const rgb = rgb2linear(r, g, b)
  const x = RGB_XYZ.x.reduce((c, v, i) => c + v * rgb[i], 0) * 100
  const y = RGB_XYZ.y.reduce((c, v, i) => c + v * rgb[i], 0) * 100
  const z = RGB_XYZ.z.reduce((c, v, i) => c + v * rgb[i], 0) * 100
  return [x, y, z]
  //
}

export const xyz2rgb = function (x: number, y: number, z: number): RgbType {
  const xyz = [x, y, z]
  const r = XYZ_RGB.r.reduce((c, v, i) => c + v * xyz[i], 0) / 100
  const g = XYZ_RGB.g.reduce((c, v, i) => c + v * xyz[i], 0) / 100
  const b = XYZ_RGB.b.reduce((c, v, i) => c + v * xyz[i], 0) / 100
  return linear2rgb(r, g, b)
}

export const xyz2lab = function (x: number, y: number, z: number): LabType {
  x = x / LAB_CONST.x / 100
  y = y / LAB_CONST.y / 100
  z = z / LAB_CONST.z / 100
  ;[x, y, z] = [x, y, z].map(i => {
    if (i > LAB_CONST.eps) return Math.pow(i, 1 / 3)
    else return (LAB_CONST.k * i + 16) / 116
  })
  const l = Math.max(0, 116 * y - 16)
  const a = 500 * (x - y)
  const b = 200 * (y - z)
  return [l, a, b]
}

export const lab2xyz = function (l: number, a: number, b: number): XyzType {
  let y = (l + 16) / 116
  let x = isNaN(a) ? y : y + a / 500
  let z = isNaN(b) ? y : y - b / 200
  ;[x, y, z] = [x, y, z].map(i => {
    if (i > LAB_CONST.t) return Math.pow(i, 3)
    return (i * 116 - 16) / LAB_CONST.k
  })
  return [x * LAB_CONST.x * 100, y * LAB_CONST.y * 100, z * LAB_CONST.z * 100]
}

export const rgb2lab = function (r: number, g: number, b: number) {
  return xyz2lab(...rgb2xyz(r, g, b))
}

export const lab2rgb = function (l: number, a: number, b: number) {
  return xyz2rgb(...lab2xyz(l, a, b))
}

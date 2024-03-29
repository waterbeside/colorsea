import { clamp, colorHex } from '../utils'
import type { CommonColorTuple, CommonColoraTuple } from '../../typings/colorType'

export const rgb2hex = function (r: number, g: number, b: number, a?: number) {
  const arr = [r, g, b]
  let hex = '#'
  const toHex = (c: number) => Math.round(clamp(c, 0, 255)).toString(16).padStart(2, '0')
  for (let i = 0; i < arr.length; i++) hex += toHex(arr[i])
  if (a != void 0)
    hex += Math.round((clamp(a, 0, 100) / 100) * 255)
      .toString(16)
      .padStart(2, '0')
  return hex
}

export const hex2rgb = function (hexString: string): CommonColorTuple | CommonColoraTuple {
  const hexStringLength = hexString.length
  hexString = colorHex(hexString).padEnd(8, 'ff')
  const matched = hexString.match(/.{2}/g)
  if (!matched) return [0, 0, 0, 1]
  const rgb: CommonColorTuple = [0, 0, 0]
  let a: boolean | number = false
  matched.forEach((c, i) => {
    if (i < 3) rgb[i] = parseInt(c, 16)
    else a = (parseInt(c, 16) * 100) / 255
  })
  return a === false || hexStringLength < 8 ? rgb : ([...rgb, a] as unknown as CommonColoraTuple)
}

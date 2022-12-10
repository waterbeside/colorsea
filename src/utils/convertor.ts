import { clampInRange, colorHex } from './index'

export const rgb2hex = function(r: number, g: number, b: number, a?: number) {
  const arr = [r, g, b]
  let hex = '#'
  const toHex = (c: number) => clampInRange(c, 0, 255).toString(16).padStart(2, '0')
  for (let i = 0; i < arr.length; i++) hex += toHex(arr[i])
  if (a != void 0) hex += toHex(a)
  return hex
}

export const hex2rgb = function(hexString: string): number[] {
  hexString = colorHex(hexString).padEnd(8, 'ff')
  const matched = hexString.match(/.{2}/g)
  if (!matched) return [0, 0, 0, 1]
  return matched.map((c, i) => {
    if (i < 3)  return parseInt(c, 16)
    else return parseInt(c, 16) / 255
  })
}
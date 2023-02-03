import { Color } from '../color'
import type { ColorBaseProp } from '../../typings/colorType'
import { clamp } from './index'
import { hsl2rgb } from '../convertor/rgbHsx'

export const getOrSet = (
  color: Color,
  type: ColorBaseProp,
  amount?: number | undefined
): number | Color => {
  const clamp01 = (v: number) => clamp(v, 0, 100)
  const clamp0255 = (v: number) => clamp(v, 0, 255)
  const typeDict: { [key in ColorBaseProp]: [number, (v: number) => number] } = {
    h: [0, (v: number) => v % 360],
    s: [1, clamp01],
    l: [2, clamp01],
    r: [0, clamp0255],
    g: [1, clamp0255],
    b: [2, clamp0255]
  }
  let rgb: [number, number, number]
  const idx = typeDict[type][0]
  if (['h', 's', 'l'].includes(type)) {
    const hsl = color.hsl()
    if (amount === void 0) return hsl[idx]
    amount = typeDict[type][1](amount)
    hsl[idx] = amount
    rgb = hsl2rgb(...hsl)
  } else {
    rgb = color.rgb()
    if (amount === void 0) return rgb[idx]
    amount = typeDict[type][1](amount)
    rgb[idx] = amount
  }
  return new Color(rgb, color.alpha())
}

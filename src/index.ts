import { Color } from './color'
import * as convertor from './convertor'
import creator from './creator'

import type { RgbType, RgbaType } from '..//typings/colorType'

function colorsea(colorSetting: RgbType | RgbaType | string, alpha?: number) {
  return new Color(colorSetting, alpha)
}

colorsea.convertor = convertor
colorsea.Color = Color
colorsea.rgb = creator.rgb
colorsea.hsl = creator.hsl
colorsea.hsv = creator.hsv
colorsea.xyz = creator.xyz
colorsea.lab = creator.lab

export default colorsea

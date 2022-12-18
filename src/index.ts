import { Color } from './color'
import * as convertor from './convertor'
import creator from './creator'
import { roundDecimal } from './utils'

import type { CommonColorTuple, CommonColoraTuple } from '..//typings/colorType'

function colorsea(colorSetting: CommonColorTuple | CommonColoraTuple | string, alpha?: number) {
  return new Color(colorSetting, alpha)
}

colorsea.convertor = convertor
colorsea.Color = Color
colorsea.rgb = creator.rgb
colorsea.hsl = creator.hsl
colorsea.hsv = creator.hsv
colorsea.hsi = creator.hsi
colorsea.hwb = creator.hwb
colorsea.xyz = creator.xyz
colorsea.lab = creator.lab
colorsea.lch = creator.lch
colorsea.utils = {
  roundDecimal
}

export default colorsea

import { Color } from './color'
import * as convertor from './convertor'
import creator from './creator'
import { roundDecimal } from './utils'
import { mix } from './utils/mix'
import { deltaE } from './utils/deltaE'
import type { CommonColorTuple, CommonColoraTuple } from '..//typings/colorType'
import { useColorNames } from './utils/colorNames'

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
colorsea.mix = mix
colorsea.deltaE = deltaE
colorsea.utils = {
  roundDecimal
}
colorsea.useNames = (keywords: { [key: string]: string }) => {
  useColorNames(keywords)
  return colorsea
}

export default colorsea

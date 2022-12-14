import { Color } from './color'
import * as convertor from './utils/convertor'

function colorsea(colorSetting: RgbType | RgbaType | string, alpha?: number) {
  return new Color(colorSetting, alpha)
}

colorsea.convertor = convertor
colorsea.Color = Color

export default colorsea

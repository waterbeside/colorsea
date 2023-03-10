import { Color } from './color'
import * as convertor from './convertor'
import creator from './creator'
import { roundDecimal, randomRange } from './utils'
import { mix } from './utils/mix'
import { deltaE } from './utils/deltaE'
import type { CommonColorTuple, CommonColoraTuple } from '..//typings/colorType'
import { useColorNames } from './utils/colorNames'
import { globalConfig, type ColorConfig } from './config'

/**
 * Create a color instance
 * @param colorInput Input your color value 设置颜色值
 * @param alpha Alpha range is [0, 100] 不透明度
 * @returns { Color } Color instance
 */
function colorsea(
  colorInput: CommonColorTuple | CommonColoraTuple | string,
  alpha?: number,
  config?: ColorConfig
) {
  return new Color(colorInput, alpha, config)
}

colorsea.config = function (config: ColorConfig): void {
  Object.assign(globalConfig, config)
}

/**
 * Generate random color
 * 生成随机颜色
 */
colorsea.random = function (): Color {
  const r = randomRange(0, 255)
  const g = randomRange(0, 255)
  const b = randomRange(0, 255)
  return new Color([r, g, b])
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
/**
 * color mixing
 * 颜色混合
 * @param color1 color1
 * @param color2 color2
 * @param weight The proportion of color1, 0 to 100, The proportion of color1, the default value is 50
 * @returns Color instance
 */
colorsea.mix = mix
/**
 * Color difference calculation
 * 色差计算
 * @param color1 color1
 * @param color2 color2
 * @param mode Formula selection, there are 'CMC', 'CIE', 'CIE2000', 'CIE1994', 'CIE1976' optional
 * @param setting The settable value of the corresponding formula
 * @returns {number} return color difference value
 */
colorsea.deltaE = deltaE
colorsea.utils = {
  /**
   * Rounding preserves the specified decimal place
   * 四舍五入保留指定的小数位
   */
  roundDecimal,
  /**
   * Generates a random number for a specified range
   * 从指定范围取随机数
   * @param min minimum
   * @param max maximum
   */
  randomRange
}

/**
 * use color names
 * 载入颜色名称字典
 * @param keywords color name-color dict
 * @param formatFn A function to format a color names dictionary
 * @returns colorsea
 */
colorsea.useNames = (
  keywords: { [key: string]: string },
  formatFn?: (key: string, value: string) => [string, string]
) => {
  useColorNames(keywords, formatFn)
  return colorsea
}

export default colorsea

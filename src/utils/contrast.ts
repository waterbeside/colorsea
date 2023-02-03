/*
 https://www.w3.org/TR/AERT/#color-contrast
```
 Two colors provide good color visibility if the brightness difference and the color difference between the two colors are greater than a set range.

Color brightness is determined by the following formula:
((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
Note: This algorithm is taken from a formula for converting RGB values to YIQ values. This brightness value gives a perceived brightness for a color.

Color difference is determined by the following formula:
(maximum (Red value 1, Red value 2) - minimum (Red value 1, Red value 2)) + (maximum (Green value 1, Green value 2) - minimum (Green value 1, Green value 2)) + (maximum (Blue value 1, Blue value 2) - minimum (Blue value 1, Blue value 2))

The rage for color brightness difference is 125. The range for color difference is 500.
 ```
*/

import { Color } from '../color'
import type { CommonColorTuple, CommonColoraTuple } from '../../typings/colorType'

/**
 * ## Color visibility
 * 检查一个颜色在别一个颜色上是否易于可见
 * https://www.w3.org/TR/AERT/#color-contrast
 *
 * @param color1 颜色一
 * @param color2 颜色二
 * @param setting 判为可见性差的最大值设置 {b, c}
 * * b: brightness差，默认值为125, brightness值的范围为[0,255]
 * * c: color差，默认值为500
 * @returns {boolean} false时则为可见性比较差
 */
export const visibility = (
  color1: Color | string | CommonColoraTuple | CommonColorTuple,
  color2: Color | string | CommonColoraTuple | CommonColorTuple,
  setting?: { b: number; c: number }
): boolean => {
  const { abs, max, min } = Math
  const c1 = color1 instanceof Color ? color1 : new Color(color1)
  const c2 = color2 instanceof Color ? color2 : new Color(color2)
  const settingDefault = {
    b: 125,
    c: 500
  }
  const opt = Object.assign({}, settingDefault, setting)
  const b1 = (c1.brightness() * 255) / 100
  const b2 = (c2.brightness() * 255) / 100
  if (abs(b1 - b2) <= opt.b) return false // 亮度差不合格
  const rDiff = max(c1.red(), c2.red()) - min(c1.red(), c2.red())
  const gDiff = max(c1.green(), c2.green()) - min(c1.green(), c2.green())
  const bDiff = max(c1.blue(), c2.blue()) - min(c1.blue(), c2.blue())
  const rgbDiff = rDiff + gDiff + bDiff
  if (rgbDiff <= opt.c) return false // 色差不合格
  return true
}

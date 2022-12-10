/**
 * Make the value fall within the range, min if less than min, max if greater than max
 * 确保值夹在范围之中， 小于min时取min， 大于max时取max
 * @param num 值
 * @param min 下边界
 * @param max 上边界
 * @returns 处理后的值
 */
export const clampInRange = function (num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max)
}

/**
 * Process hexadecimal colors to 6 or 8 bits and remove the # sign
 * 处理十六进制颜色到6位或8位，并去除#号
 * @param hexString 十六进制颜色字符串
 * @returns 处理后的颜色字符串
 */
export const colorHex = function (hexString: string): string {
  hexString = /^#/.test(hexString) ? hexString.slice(1) : hexString
  const len = hexString.length
  if (![3, 4, 6, 8].includes(len)) return '000000'
  if (len === 6 || len === 8) return hexString
  if (len === 3 || len === 4) {
    let res = ''
    for (let i = 0; i < len; i++) {
      const c = hexString[i]
      res += '' + c + c
    }
    return res
  }
  return '000000'
}

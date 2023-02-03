/**
 * Make the value fall within the range, min if less than min, max if greater than max
 * 确保值夹在范围之中， 小于min时取min， 大于max时取max
 * @param num 值
 * @param min 下边界
 * @param max 上边界
 * @returns 处理后的值
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max)
}

/**
 * Process hexadecimal colors to 6 or 8 bits and remove the # sign
 * 处理十六进制颜色到6位或8位，并去除#号
 * @param hexString 十六进制颜色字符串
 * @returns 处理后的颜色字符串
 */
export const colorHex = (hexString: string): string => {
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

export const roundDecimal = (n: number, fractionDigits: number): number => {
  return (
    Math.round((n + Number.EPSILON) * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits)
  )
}

export const checkHex = (hex: string): boolean => {
  const re = /^#(([a-fA-F\d]{3}){1,2}|[a-fA-F\d]{8})$/
  return re.test(hex)
}

/**
 * Generates a random number for a specified range
 * @param min minimum
 * @param max maximum
 */
export const randomRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) - min)
}

/**
 * rgb to brightness [0, 100]
 * 
 * https://www.w3.org/TR/AERT/#color-contrast
  > Color brightness is determined by the following formula:
  >
  > ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
 */
export const getBrightness = (r: number, g: number, b: number) => {
  return ((r * 299 + g * 587 + b * 114) / 1000 / 255) * 100
}

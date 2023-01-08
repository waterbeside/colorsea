export const KEYWORDS: { [key: string]: string } = {}

export const useColorNames = (
  keywords: { [key: string]: string },
  formatFn?: (key: string, value: string) => [string, string]
) => {
  if (formatFn !== void 0 && typeof formatFn === 'function') {
    const newKeywords: { [key: string]: string } = {}
    for (const key in keywords) {
      const [newKey, newValue] = formatFn(key, keywords[key])
      newKeywords[newKey] = newValue
    }
    Object.assign(KEYWORDS, newKeywords)
  } else {
    Object.assign(KEYWORDS, keywords)
  }
}

export const getValueByColorName = (keyword: string, isThrowError: boolean = false): string => {
  keyword = keyword.toLowerCase()
  if (KEYWORDS[keyword] === void 0) {
    if (isThrowError) throw new Error(`Unknown color name: ${keyword})`)
    return keyword
  }
  return KEYWORDS[keyword]
}

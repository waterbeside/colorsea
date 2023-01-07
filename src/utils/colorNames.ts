export const KEYWORDS: { [key: string]: string } = {}

export const useColorNames = (keywords: { [key: string]: string }) => {
  Object.assign(KEYWORDS, keywords)
}

export const getValueByColorName = (keyword: string, isThrowError: boolean = false): string => {
  keyword = keyword.toLowerCase()
  if (KEYWORDS[keyword] === void 0) {
    if (isThrowError) throw new Error(`Unknown color name: ${keyword})`)
    return keyword
  }
  return KEYWORDS[keyword]
}

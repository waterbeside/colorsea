import type { CommonColorTuple, CommonColoraTuple, CmykTuple } from '../../typings/colorType'
import { checkHex } from './index'
import { getValueByColorName } from './colorNames'
import {
  cmyk2rgb,
  lab2rgb,
  hsl2rgb,
  hsv2rgb,
  xyz2rgb,
  lch2xyz,
  hex2rgb,
  hwb2rgb
} from '../convertor'

const spaceList = [
  'rgb',
  'rgba',
  'cmyk',
  'lab',
  'hsl',
  'hsla',
  'hsv',
  'hsva',
  'xyz',
  'lch',
  'hwb',
  'hwba'
] as const
const spaceSet = new Set(spaceList)

type Space = typeof spaceList[number]
type OutputSpace = Exclude<Space, 'cmyk'>

type ParserReturn = [OutputSpace, CommonColorTuple, number] | ['cmyk', CmykTuple, number]

const parserReg = /^([a-zA-Z]+)\(([\s\S]+)\)$/

export const parsePersentString = (n: string | number): number => {
  if (typeof n === 'string') {
    if (n.indexOf('%') !== -1) n = n.split('%')[0]
    else return parsePersentString(Number(n.trim()))
    n = Number(n.trim())
    return n || 0
  }
  if (Math.abs(n) < 1) return n * 100
  return n
}

export const parseColorInput = (
  colorInput: CommonColorTuple | CommonColoraTuple | string,
  visited: Set<string> = new Set()
): ParserReturn => {
  const visitedKey = typeof colorInput === 'string' ? colorInput : colorInput.join(',')
  if (visited.has(visitedKey)) throw new Error('Invalid Color')
  visited.add(visitedKey)
  let space: Space = 'rgb'
  let colorData: CommonColorTuple | CmykTuple = [0, 0, 0]
  let alpha = 100
  if (Array.isArray(colorInput)) {
    if (colorInput.length < 3) throw new Error('Invalid Color')
    for (let i = 0; i < colorInput.length; i++) {
      if (i < 3) colorData[i] = colorInput[i]
      else if (i === 3 && colorInput[3] !== void 0) alpha = colorInput[3] as number
      else break
    }
  } else {
    let toNext = false
    const matcher = colorInput.trim().match(parserReg)
    if (!matcher) toNext = true
    if (matcher) {
      let s: Space = matcher[1].toLocaleLowerCase() as Space
      space = s
      if (!spaceSet.has(s)) toNext = true

      if (matcher[2] && !toNext) {
        const g = matcher[2]
        let sp = g.indexOf(',') !== -1 ? ',' : ' '
        const gSplit = g.split(sp)
        for (let i = 0; i < 3; i++) {
          if (gSplit[i] === void 0) continue
          if (
            (['lch', 'lab'].includes(space) && i === 0) ||
            (['hsl', 'hsla', 'hsv', 'hsva', 'hwb', 'hwba'].includes(space) && i > 0)
          ) {
            colorData[i] = parsePersentString(gSplit[i])
          } else colorData[i] = Number(gSplit[i].trim())
        }
        if (space === 'rgba' || space === 'hsla') {
          space = space.slice(0, -1) as Space
          if (gSplit[3] !== void 0) alpha = parsePersentString(gSplit[3])
        } else if (space === 'cmyk') {
          colorData.push(gSplit[3] !== void 0 ? parsePersentString(gSplit[3]) : 0)
        }
      }
    }
    if (toNext) {
      if (!checkHex(colorInput)) {
        try {
          colorInput = getValueByColorName(colorInput, true)
          return parseColorInput(colorInput, visited)
        } catch (error) {
          throw new Error('Invalid Color')
        }
      }
      colorData = hex2rgb(colorInput)
    }
  }

  return [space, colorData, alpha] as ParserReturn
}

export const parser = (
  colorInput: string | CommonColorTuple | CommonColoraTuple
): [CommonColorTuple, number] => {
  const convertors = {
    lab2rgb,
    hsl2rgb,
    hsv2rgb,
    xyz2rgb,
    hwb2rgb
  }
  let [space, colorData, alpha] = parseColorInput(colorInput)

  if (space === 'rgb') return [colorData as CommonColorTuple, alpha]
  if (space === 'lch') {
    ;[space, colorData] = ['xyz', lch2xyz(colorData[0], colorData[1], colorData[2])]
  }
  const [a, b, c, d] = colorData
  if (space === 'cmyk') return [cmyk2rgb(a, b, c, d as number), alpha]
  const convertorName = `${space}2rgb` as keyof typeof convertors
  if (typeof convertors[convertorName] === 'function') {
    return [convertors[convertorName](a, b, c), alpha]
  }
  throw new Error(`Invalid color`)
}

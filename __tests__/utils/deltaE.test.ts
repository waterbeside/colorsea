import colorsea from '../../src/index'
import { deltaE } from '../../src/utils/deltaE'
const { utils } = colorsea

describe('test deltaE', () => {
  it('test deltaE 1', () => {
    // 测试结果参考此网站 http://www.brucelindbloom.com/index.html?ColorDifferenceCalc.html
    const color1 = colorsea.lab(100, -12, 70)
    const color2 = colorsea.lab(100, -11, 80)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CMC'), 3)).toBe(3.513)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE2000'), 3)).toBe(2.608)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE1994'), 5)).toBe(2.61823)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE1976'), 5)).toBe(10.04988)
    expect(utils.roundDecimal(color1.deltaE(color2), 3)).toBe(3.513)
    expect(utils.roundDecimal(color1.deltaE(color2, 'cie'), 3)).toBe(2.608)
  })

  it('test deltaE 2', () => {
    const color1 = colorsea.lab(80, 30, 120)
    const color2 = colorsea.lab(79, 28, 100)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CMC'), 3)).toBe(5.754)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CMC', { l: 2 }), 3)).toBe(5.719)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE2000'), 4)).toBe(3.6815)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE1994'), 4)).toBe(3.3725)
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE1994', { cate: 'textiles' }), 4)).toBe(
      3.1285
    )
    expect(utils.roundDecimal(deltaE(color1, color2, 'CIE1976'), 4)).toBe(20.1246)
  })
})

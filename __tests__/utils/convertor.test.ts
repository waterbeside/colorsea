import colorsea from '../../src/index'
const { convertor, utils } = colorsea
describe('test convertor', () => {
  it('test rgb hex', () => {
    const res = convertor.rgb2hex(255, 2, 20, 90)
    expect(res).toBe('#ff0214e6')
    expect(convertor.hex2rgb('#ff0214e6').map(i => utils.roundDecimal(i, 0))).toEqual([
      255, 2, 20, 90
    ])
  })

  it('test rgb cmyk', () => {
    const res = convertor.rgb2cmyk(70, 120, 200)
    expect(res.map(v => utils.roundDecimal(v, 0))).toEqual([65, 40, 0, 22])
    expect(
      convertor.cmyk2rgb(64.9999999, 39.999999, 0, 21.568).map(i => utils.roundDecimal(i, 0))
    ).toEqual([70, 120, 200])
  })

  it('test rgb to hwb', () => {
    expect(convertor.rgb2hwb(255, 2, 20).map(i => utils.roundDecimal(i, 0))).toEqual([356, 1, 0])
    expect(convertor.hwb2rgb(27, 8, 22).map(i => utils.roundDecimal(i, 0))).toEqual([199, 101, 20])
  })

  it('test rgb hsl', () => {
    const color = colorsea('#555')
    const hsl = convertor.rgb2hsl(...color.rgb())
    expect(hsl.map(i => Math.round(i))).toEqual([NaN, 0, 33])
    expect(convertor.hsl2rgb(...hsl).map(i => Math.round(i))).toEqual(color.rgb())
  })

  it('test rgb hsi', () => {
    const hsi = convertor.rgb2hsi(83, 82, 72)
    expect(hsi.map(i => Math.round(i))).toEqual([55, 9, 31])
    expect(convertor.rgb2hsl(83, 82, 72).map(i => Math.round(i))).toEqual([55, 7, 30])
  })

  it('test rgb xyz', () => {
    const color = colorsea('#405060')
    const xyz = convertor.rgb2xyz(...color.rgb())
    expect(xyz.map(i => Number(i.toFixed(2)))).toEqual([7.09, 7.67, 12.17])
    expect(convertor.xyz2rgb(...xyz).map(v => utils.roundDecimal(v, 0))).toEqual(color.rgb())

    expect(convertor.rgb2xyz(85, 85, 85).map(i => utils.roundDecimal(i, 0))).toEqual([9, 9, 10])
  })

  it('test rgb lab', () => {
    const color = colorsea('#444D69')
    const lab = convertor.xyz2lab(...convertor.rgb2xyz(...color.rgb()))
    expect(lab.map(i => Number(i.toFixed(2)))).toEqual([33.04, 3.9, -17.39])
    expect(convertor.lab2rgb(...lab).map(v => utils.roundDecimal(v, 0))).toEqual(color.rgb())

    const color2 = colorsea('#ff00ff')
    const lab2 = convertor.rgb2lab(...color2.rgb())
    expect(lab2.map(i => utils.roundDecimal(i, 2))).toEqual([60.32, 98.23, -60.82])
    expect(convertor.lab2rgb(...lab2).map(v => utils.roundDecimal(v, 0))).toEqual(color2.rgb())
  })

  it('test lab lch', () => {
    expect(convertor.lab2lch(33.29, -1.94, -11.36).map(i => utils.roundDecimal(i, 2))).toEqual([
      33.29, 11.52, 260.31
    ])
    expect(convertor.lch2lab(33.29, 11.52, 260.31).map(i => utils.roundDecimal(i, 2))).toEqual([
      33.29, -1.94, -11.36
    ])
  })

  it('test xyz xyY', () => {
    expect(convertor.xyz2xyY(7.09, 7.67, 12.17).map(i => utils.roundDecimal(i, 2))).toEqual([
      0.26, 0.28, 7.67
    ])
    expect(
      convertor.xyY2xyz(0.26327516, 0.28481248, 7.67).map(i => utils.roundDecimal(i, 2))
    ).toEqual([7.09, 7.67, 12.17])
  })
})

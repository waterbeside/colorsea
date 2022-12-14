import colorsea from '../../src/index'
const { convertor } = colorsea
describe('test convertor', () => {
  it('test rgb hsl', () => {
    const color = colorsea('#555')
    const hsl = convertor.rgb2hsl(...color.rgb())
    expect(hsl.map(i => Number(i.toFixed(2)))).toEqual([NaN, 0, 0.33])
    expect(convertor.hsl2rgb(...hsl)).toEqual(color.rgb())
  })

  it('test rgb xyz', () => {
    const color = colorsea('#405060')
    const xyz = convertor.rgb2xyz(...color.rgb())
    expect(xyz.map(i => Number(i.toFixed(2)))).toEqual([7.09, 7.67, 12.17])
    expect(convertor.xyz2rgb(...xyz)).toEqual(color.rgb())
  })

  it('test rgb lab', () => {
    const color = colorsea('#444D69')
    const lab = convertor.rgb2lab(...color.rgb())
    expect(lab.map(i => Number(i.toFixed(2)))).toEqual([33.04, 3.9, -17.39])
    expect(convertor.lab2rgb(...lab)).toEqual(color.rgb())

    const color2 = colorsea('#ff00ff')
    const lab2 = convertor.rgb2lab(...color2.rgb())
    expect(lab2.map(i => Number(i.toFixed(2)))).toEqual([60.32, 98.23, -60.82])
    expect(convertor.lab2rgb(...lab2)).toEqual(color2.rgb())
  })
})

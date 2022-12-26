import colorsea from '../src/index'
describe('Class Color', () => {
  it('test color operations', () => {
    expect(colorsea('#ffffff').darken(10).hex()).toBe('#e6e6e6')
    expect(colorsea('#000').lighten(10).hex()).toBe('#1a1a1a')
    expect(colorsea('#ff0000').spin(180).hex()).toBe('#00ffff')
    expect(colorsea.hsl(80, 90, 20).saturate(10).hsl()).toEqual([80, 100, 20])
    expect(colorsea.hsl(80, 90, 20).desaturate(10).hsl()).toEqual([80, 80, 20])
    expect(colorsea('#776600').fadeOut(10).rgba()).toEqual([119, 102, 0, 90])
  })
})

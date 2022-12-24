import colorsea from '../src/index'
describe('Class Color', () => {
  it('test color operations', () => {
    expect(colorsea('#ffffff').darken(0.1).hex()).toBe('#e6e6e6')
    expect(colorsea('#000').lighten(0.1).hex()).toBe('#1a1a1a')
    expect(colorsea('#ff0000').spin(180).hex()).toBe('#00ffff')
    expect(colorsea.hsl(80, 0.9, 0.2).saturate(0.1).hsl()).toEqual([80, 1, 0.2])
    expect(colorsea.hsl(80, 0.9, 0.2).desaturate(0.1).hsl()).toEqual([80, 0.8, 0.2])
    expect(colorsea('#776600').fadeOut(0.1).rgba()).toEqual([119, 102, 0, 0.9])
  })
})

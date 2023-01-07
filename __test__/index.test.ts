import colorsea from '../src/index'
import x11 from '../src/colors/x11'

colorsea.useNames(x11)

describe('test colorsea', () => {
  it('test color operations', () => {
    expect(colorsea('#ffffff').darken(10).hex()).toBe('#e6e6e6')
    expect(colorsea('#000').lighten(10).hex()).toBe('#1a1a1a')
    expect(colorsea('#ff0000').spin(180).hex()).toBe('#00ffff')
    expect(colorsea.hsl(80, 90, 20).saturate(10).hsl()).toEqual([80, 100, 20])
    expect(colorsea.hsl(80, 90, 20).desaturate(10).hsl()).toEqual([80, 80, 20])
    expect(colorsea('#776600').fadeOut(10).rgba()).toEqual([119, 102, 0, 90])
  })

  it('test color names', () => {
    expect(colorsea('Aqua').hex()).toBe('#00ffff')
    expect(colorsea('Aquamarine').hex()).toBe('#7fffd4')
    expect(colorsea('Beige').hex().toUpperCase()).toBe('#F5F5DC')
    expect(colorsea('DarkCyan').hex().toUpperCase()).toBe('#008B8B')
    expect(colorsea('DimGray').hex().toUpperCase()).toBe('#696969')
    expect(colorsea('LightCoral').hex().toUpperCase()).toBe('#F08080')
  })
})

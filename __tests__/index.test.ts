import colorsea from '../src/index'
import x11 from '../src/colors/x11'
import chinese from '../src/colors/chinese'
import nippon from '../src/colors/nippon'
import nipponRm from '../src/colors/nipponRm'

colorsea.useNames(x11).useNames(chinese)

describe('test colorsea', () => {
  it('test color operations', () => {
    expect(colorsea('#ffffff').darken(10).hex()).toBe('#e6e6e6')
    expect(colorsea('#000').lighten(10).hex()).toBe('#1a1a1a')
    expect(colorsea('#ff0000').spin(180).hex()).toBe('#00ffff')
    expect(colorsea.hsl(80, 90, 20).saturate(10).hsl()).toEqual([80, 100, 20])
    expect(colorsea.hsl(80, 90, 20).desaturate(10).hsl()).toEqual([80, 80, 20])
    expect(colorsea('#776600').fadeOut(10).rgba()).toEqual([119, 102, 0, 90])
  })

  it('test x11 color names', () => {
    expect(colorsea('Aqua').hex()).toBe('#00ffff')
    expect(colorsea('Aquamarine').hex()).toBe('#7fffd4')
    expect(colorsea('Beige').hex().toUpperCase()).toBe('#F5F5DC')
    expect(colorsea('DarkCyan').hex().toUpperCase()).toBe('#008B8B')
    expect(colorsea('DimGray').hex().toUpperCase()).toBe('#696969')
    expect(colorsea('LightCoral').hex().toUpperCase()).toBe('#F08080')
  })

  it('test chinese color names', () => {
    expect(colorsea('水绿').hex()).toBe('#8cc269')
    expect(colorsea('潮蓝').hex()).toBe('#2983bb')
    expect(colorsea('山梗紫').hex()).toBe('#61649f')
  })

  it('test Nippon color names use a prefix', () => {
    colorsea.useNames(nippon, (key, value) => [`np:${key}`, value]).useNames(nipponRm)
    expect(colorsea('np:紅消鼠').hex().toUpperCase()).toBe('#52433D')
    expect(colorsea('np:檳榔子染').hex().toUpperCase()).toBe('#3A3226')
    expect(colorsea('FUTAAI').hex().toUpperCase()).toBe('#70649A')
    expect(colorsea('momo').hex().toUpperCase()).toBe('#F596AA')
  })

  it('test parse color', () => {
    expect(colorsea('RGB(64, 80, 96)').rgb()).toEqual([64, 80, 96])
    expect(colorsea('rgba(253,101,133, 0.9)').rgb()).toEqual([253, 101, 133])
    expect(colorsea('hsv(339.10, 69.20%, 87.84%)').hex().toUpperCase()).toBe('#E0457B')
    expect(colorsea('hsv(339.10, 69.20, 87.84)').hex().toUpperCase()).toBe('#E0457B')
    // d65 光源 2度
    expect(colorsea('#E0457B').xyz()).toEqual([36.45, 21.54, 20.97])
    expect(colorsea('XYZ(36.45, 21.54, 20.97)').hex().toUpperCase()).toBe('#E0457B')
    // test error color input
    expect(colorsea('XYa(36.45, 21.54, 20.97)').hex().toUpperCase()).toBe('#000000')
  })

  it('test parse error', () => {
    try {
      colorsea('XYa(36.45, 21.54, 20.97)', undefined, { thowParseError: true })
    } catch (error: any) {
      expect(error.message).toBe('Invalid Color')
    }
  })

  it('test mix color', () => {
    expect(colorsea('rgb(30, 177, 250)').mix('hsl(0 100% 20%)', 60).hex()).toBe('#494764')
    expect(colorsea('#CE9FFC').mix('#EA5455', 50).hex()).toBe('#dc7aa9')
    expect(colorsea('#0396FF').mix('#7367F0', 33).mix('#EA5455', 50).hex()).toBe('#896da8')
  })
})

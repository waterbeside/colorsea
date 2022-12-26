import { Color } from '../src/color'

describe('Class Color', () => {
  it('test convert to rgb and hsl', () => {
    const color = new Color('#ff0000')

    expect(color.rgb()).toEqual([255, 0, 0])
    expect(color.red()).toBe(255)
    expect(color.green()).toBe(0)
    expect(color.blue()).toBe(0)
    expect(color.hsl()).toEqual([0, 100, 50])
  })

  it('test mix', () => {
    const color1 = new Color('#ff0000')
    const color2 = new Color('#0000ff')
    expect(color1.mix(color2, 20).hex(0)).toBe('#cc0033')
  })

  it('test convert color space', () => {
    const color = new Color('#405060')
    expect(color.rgb()).toEqual([64, 80, 96])
    expect(color.xyz()).toEqual([7.09, 7.67, 12.17])
    expect(color.xyz(0)).toEqual([7, 8, 12])
    expect(color.lab()).toEqual([33.29, -1.94, -11.36])
    expect(color.lab(4)).toEqual([33.2892, -1.9394, -11.3614])
    expect(color.hsl(2)).toEqual([210, 20, 31.37])
    expect(color.lch()).toEqual([33.29, 11.53, 260.31])
  })
})

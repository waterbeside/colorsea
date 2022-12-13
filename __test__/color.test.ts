import { Color } from '../src/color'

describe('Class Color', () => {
  it('test convert to rgb and hsl', () => {
    const color = new Color('#ff0000')

    expect(color.rgb()).toEqual([255, 0, 0])
    expect(color.red()).toBe(255)
    expect(color.green()).toBe(0)
    expect(color.blue()).toBe(0)
    expect(color.hsl()).toEqual({ h: 0, s: 1, l: 0.5, a: 1 })
  })

  it('test mix', () => {
    const color1 = new Color('#ff0000')
    const color2 = new Color('#0000ff')
    expect(color1.mix(color2, 0.2).hex(0)).toBe('#cc0033')
  })
})

import { Color } from '../src/color'

describe('Class Color', () => {
  it('test convert to rgb and hsl', () => {
    const color = new Color('#ff0000')

    expect(color.rgb()).toEqual([255, 0, 0])
    expect(color.red()).toBe(255)
    expect(color.green()).toBe(0)
    expect(color.blue()).toBe(0)
    expect(color.hsl()).toEqual([0, 1, 0.5])
  })

  it('test mix', () => {
    const color1 = new Color('#ff0000')
    const color2 = new Color('#0000ff')
    expect(color1.mix(color2, 0.2).hex(0)).toBe('#cc0033')
  })

  it('test lab xyz', () => {
    const color = new Color('#405060')
    expect(color.rgb()).toEqual([64, 80, 96])
    expect(color.xyz().map(i => Number(i.toFixed(2)))).toEqual([7.09, 7.67, 12.17])
  })
})

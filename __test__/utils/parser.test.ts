import { parseColorInput } from '../../src/utils/parser'

describe('test parser', () => {
  it('rgba(244, 244, 244)', () => {
    expect(parseColorInput('rgba(244, 244, 244)')).toEqual(['rgb', [244, 244, 244], 100])
  })
  it('rgba(244, 244, 244, 0.5)', () => {
    expect(parseColorInput('rgba(244, 244, 244, 0.5)')).toEqual(['rgb', [244, 244, 244], 50])
    expect(parseColorInput('rgba(244, 244, 244, 50%)')).toEqual(['rgb', [244, 244, 244], 50])
    expect(parseColorInput('rgba(244, 244, 244, 0.5%)')).toEqual(['rgb', [244, 244, 244], 0.5])
  })
  it('hsla(100, 20%, 50%, 0.9)', () => {
    expect(parseColorInput('hsla(100, 20%, 50%, 0.9)')).toEqual(['hsl', [100, 20, 50], 90])
    expect(parseColorInput('hsla(100, 0.2, 0.5, 0.9)')).toEqual(['hsl', [100, 20, 50], 90])
  })

  it('hsv(100, 20%, 50%)', () => {
    expect(parseColorInput('hsv(100, 20%, 50%)')).toEqual(['hsv', [100, 20, 50], 100])
    expect(parseColorInput('hsv(100, 0.2, 0.5)')).toEqual(['hsv', [100, 20, 50], 100])
    expect(parseColorInput('hsv(100, 20, 50)')).toEqual(['hsv', [100, 20, 50], 100])
  })

  it('hwb(100, 15%, 2%)', () => {
    expect(parseColorInput('hwb(100, 15%, 2%)')).toEqual(['hwb', [100, 15, 2], 100])
    expect(parseColorInput('hwb(100, 15, 2)')).toEqual(['hwb', [100, 15, 2], 100])
    expect(parseColorInput('hwb(100, 0.15, 0.02)')).toEqual(['hwb', [100, 15, 2], 100])
  })
})

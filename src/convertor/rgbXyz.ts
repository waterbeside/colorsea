import { XYZ_RGB, RGB_XYZ } from '../constants/lab'
import { rgb2linear, linear2rgb } from './linearRgb'
import type { RgbType, XyzType } from '../../typings/colorType'

export const rgb2xyz = function (r: number, g: number, b: number): XyzType {
  // Calibration for observer @2° with illumination = D65
  const rgb = rgb2linear(r, g, b)
  const x = RGB_XYZ.x.reduce((c, v, i) => c + v * rgb[i], 0) * 100
  const y = RGB_XYZ.y.reduce((c, v, i) => c + v * rgb[i], 0) * 100
  const z = RGB_XYZ.z.reduce((c, v, i) => c + v * rgb[i], 0) * 100
  return [x, y, z]
  //
}

export const xyz2rgb = function (x: number, y: number, z: number): RgbType {
  const xyz = [x, y, z]
  const r = XYZ_RGB.r.reduce((c, v, i) => c + v * xyz[i], 0) / 100
  const g = XYZ_RGB.g.reduce((c, v, i) => c + v * xyz[i], 0) / 100
  const b = XYZ_RGB.b.reduce((c, v, i) => c + v * xyz[i], 0) / 100
  return linear2rgb(r, g, b)
}

import type { Color } from '../color'
const { sqrt, pow, cos, abs, sin, exp, atan2, PI } = Math

const d2r = function (deg: number) {
  return (PI * deg) / 180
}

const r2d = function (rad: number) {
  return (180 * rad) / PI
}

const getH = function (a: number, b: number, is2Deg = true): number {
  let H = atan2(b, a)
  if (is2Deg) {
    H = r2d(H)
    H = H > 0 ? H : H + 360
    H = H > 360 ? H - 360 : H
  }
  return H
}

const getLchab = function (color: Color, hIs2Deg = true): [number, number, number, number, number] {
  const [L, a, b] = color.lab(false)
  const C = sqrt(pow(a, 2) + pow(b, 2))
  const H = getH(a, b, hIs2Deg)
  return [L, C, H, a, b]
}

export const cmcDeltaE = function (color1: Color, color2: Color, l: number = 1, c: number = 1) {
  /**
   * http://brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
   * The color difference method of the Color Measurement Committee (the CMC) is a model using two parameters l and c, typically expressed as CMC(l:c).
   * Commonly used values for acceptability are CMC(2:1) and for perceptibility are CMC(1:1).
   */
  // H1应为角度而非孤度，个别在线色差计算网站会使用弧度计算，其结果并不准确

  const [L1, C1, H1, a1, b1] = getLchab(color1, true)
  const [L2, C2, , a2, b2] = getLchab(color2)
  const deltaC = C1 - C2
  const deltaL = L1 - L2
  const deltaA = a1 - a2
  const deltaB = b1 - b2
  const deltaH = sqrt(pow(deltaA, 2) + pow(deltaB, 2) - pow(deltaC, 2))

  const sL = L1 < 16 ? 0.511 : (0.040975 * L1) / (1 + 0.01765 * L1)
  const sC = (0.0638 * C1) / (1 + 0.0131 * C1) + 0.638
  const T =
    164 <= H1 && H1 <= 345
      ? 0.56 + abs(0.2 * cos(d2r(H1 + 168)))
      : 0.36 + abs(0.4 * cos(d2r(H1 + 35)))
  const F = sqrt(pow(C1, 4) / (pow(C1, 4) + 1900))
  const sH = sC * (F * T + 1.0 - F)
  return sqrt(pow(deltaL / (l * sL), 2) + pow(deltaC / (c * sC), 2) + pow(deltaH / sH, 2))
}

export const cie2000DeltaE = function (color1: Color, color2: Color, kL = 1, kC = 1, kH = 1) {
  // http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
  const [L1, C1, , a1, b1] = getLchab(color1)
  const [L2, C2, , a2, b2] = getLchab(color2)

  const daL = (L1 + L2) / 2
  const aC = (C1 + C2) / 2
  const G = (1 - sqrt(pow(aC, 7) / (pow(aC, 7) + pow(25, 7)))) / 2

  const dA1 = a1 * (1 + G)
  const dA2 = a2 * (1 + G)
  const dC1 = sqrt(pow(dA1, 2) + pow(b1, 2))
  const dC2 = sqrt(pow(dA2, 2) + pow(b2, 2))

  const H1 = getH(dA1, b1, true)
  const H2 = getH(dA2, b2, true)

  const daC = (dC1 + dC2) / 2

  const daH = abs(H1 - H2) > 180 ? (H1 + H2 + 360) / 2 : (H1 + H2) / 2

  const T =
    1 -
    0.17 * cos(d2r(daH - 30)) +
    0.24 * cos(d2r(2 * daH)) +
    0.32 * cos(d2r(3 * daH + 6)) -
    0.2 * cos(d2r(4 * daH - 63))

  const deltaDh =
    abs(H2 - H1) <= 180 ? H2 - H1 : abs(H2 - H1) > 180 && H2 <= H1 ? H2 - H1 + 360 : H2 - H1 - 360

  const deltaL = L2 - L1
  const deltaC = C2 - C1
  const deltaH = 2 * sqrt(dC1 * dC2) * sin(d2r(deltaDh) / 2)

  const sL = 1 + (0.015 * pow(daL - 50, 2)) / sqrt(20 + pow(daL - 50, 2))
  const sC = 1 + 0.045 * daC
  const sH = 1 + 0.015 * daC * T
  const deltaTheta = 30 * exp(-pow((daH - 275) / 25, 2))
  const rC = 2 * sqrt(pow(daC, 7) / (pow(daC, 7) + pow(25, 7)))
  const rT = -rC * sin(2 * d2r(deltaTheta))

  return sqrt(
    pow(deltaL / (kL * sL), 2) +
      pow(deltaC / (kC * sC), 2) +
      pow(deltaH / (kH * sH), 2) +
      rT * (deltaC / (kC * sC)) * (deltaH / (kH * sH))
  )
}

export const cie1994DeltaE = function (
  color1: Color,
  color2: Color,
  kL = 1,
  kC = 1,
  kH = 1,
  cate: 'graphic' | 'textiles' = 'graphic'
) {
  // http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE94.html
  const K1 = cate === 'textiles' ? 0.048 : 0.045
  const K2 = cate === 'textiles' ? 0.014 : 0.015
  kL = cate === 'textiles' ? 2 : kL
  const [L1, C1, _, a1, b1] = getLchab(color1)
  const [L2, C2, _2, a2, b2] = getLchab(color2)
  const deltaL = L1 - L2
  const deltaC = C1 - C2
  const deltaA = a1 - a2
  const deltaB = b1 - b2
  const sL = 1
  const sC = 1 + K1 * C1
  const sH = 1 + K2 * C1
  const deltaH = sqrt(pow(deltaA, 2) + pow(deltaB, 2) - pow(deltaC, 2))
  return sqrt(pow(deltaL / (kL * sL), 2) + pow(deltaC / (kC * sC), 2) + pow(deltaH / (kH * sH), 2))
}

export const cie1976DeltaE = function (color1: Color, color2: Color) {
  // http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE76.html
  const [L1, a1, b1] = color1.lab(false)
  const [L2, a2, b2] = color2.lab(false)
  return sqrt(pow(L1 - L2, 2) + pow(a1 - a2, 2) + pow(b1 - b2, 2))
}

const deltaEModeArray = ['CMC', 'CIE', 'CIE2000', 'CIE1994', 'CIE1976'] as const

type DeltaEModeUpper = typeof deltaEModeArray[number]
type DeltaEModeLower = 'cmc' | 'cie' | 'cie2000' | 'cie1994' | 'cie1976'
export type DeltaEMode = DeltaEModeUpper | DeltaEModeLower
type DeltaECmcSetting = { l: number; c: number }
type DeltaECie2000Setting = { kL: number; kC: number; kH: number }
type DeltaECie1994Setting = { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' }
export type DeltaESetting =
  | Partial<DeltaECmcSetting>
  | Partial<DeltaECie2000Setting>
  | Partial<DeltaECie1994Setting>

const deltaEMode = {
  CMC: 'CMC' as 'CMC',
  CIE2000: 'CIE2000' as 'CIE2000',
  CIE1994: 'CIE1994' as 'CIE1994',
  CIE1976: 'CIE1976' as 'CIE1976'
}

const prettyMode = (mode: DeltaEMode): DeltaEModeUpper => {
  const modeUpper = mode.toUpperCase()
  if (!deltaEModeArray.includes(modeUpper as DeltaEModeUpper) || modeUpper === 'CIE') {
    return deltaEMode.CIE2000
  } else {
    return modeUpper as DeltaEModeUpper
  }
}

/**
 * Color difference calculation
 * 色差计算
 * @param color1 color1
 * @param color2 color2
 * @param mode Formula selection, there are 'CMC', 'CIE', 'CIE2000', 'CIE1994', 'CIE1976' optional
 * @param setting The settable value of the corresponding formula
 * @returns {number} return color difference value
 */
export const deltaE = function(
  color1: Color,
  color2: Color,
  mode: DeltaEMode = 'CIE',
  setting?: DeltaESetting | {}
): number {
  const kL = 1,
    kC = 1,
    kH = 1
  const eMode: DeltaEModeUpper = prettyMode(mode)
  setting = setting || {}
  if (eMode === deltaEMode.CMC) {
    const defaultSetting: DeltaECmcSetting = {
      l: 1,
      c: 1
    }
    const opt = Object.assign({}, defaultSetting, setting) as DeltaECmcSetting
    return cmcDeltaE(color1, color2, opt.l, opt.c)
  } else if (eMode === deltaEMode.CIE1994) {
    const defaultSetting: DeltaECie1994Setting = {
      kL,
      kC,
      kH,
      cate: 'graphic'
    }
    const opt = Object.assign({}, defaultSetting, setting) as DeltaECie1994Setting
    return cie1994DeltaE(color1, color2, opt.kL, opt.kC, opt.kH, opt.cate)
  } else if (eMode === deltaEMode.CIE1976) {
    return cie1976DeltaE(color1, color2)
  }
  const defaultSetting: DeltaECie2000Setting = {
    kL,
    kC,
    kH
  }
  const opt = Object.assign({}, defaultSetting, setting) as DeltaECie2000Setting
  return cie2000DeltaE(color1, color2, opt.kL, opt.kC, opt.kH)
}

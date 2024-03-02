export type CommonColorTuple = [number, number, number]
export type CommonColoraTuple = [number, number, number, number]
export type CmykTuple = [number, number, number, number]

export type ColorConfig = {
  thowParseError?: boolean
}

declare const deltaEModeArray: readonly ['CMC', 'CIE', 'CIE2000', 'CIE1994', 'CIE1976']
export type DeltaEModeUpper = typeof deltaEModeArray[number]
export type DeltaEModeLower = 'cmc' | 'cie' | 'cie2000' | 'cie1994' | 'cie1976'
export type DeltaEMode = DeltaEModeUpper | DeltaEModeLower
export type DeltaECmcSetting = {
  l: number
  c: number
}
export type DeltaECie2000Setting = {
  kL: number
  kC: number
  kH: number
}
export type DeltaECie1994Setting = {
  kL: number
  kC: number
  kH: number
  cate: 'graphic' | 'textiles'
}
export type DeltaESetting =
  | Partial<DeltaECmcSetting>
  | Partial<DeltaECie2000Setting>
  | Partial<DeltaECie1994Setting>

declare const rgb2linear: (r: number, g: number, b: number) => CommonColorTuple
declare const linear2rgb: (r: number, g: number, b: number) => CommonColorTuple

declare const rgb2hex: (r: number, g: number, b: number, a?: number) => string
declare const hex2rgb: (hexString: string) => CommonColorTuple | CommonColoraTuple

declare const rgb2cmyk: (r: number, g: number, b: number) => CmykTuple
declare const cmyk2rgb: (c: number, m: number, y: number, k: number) => CommonColorTuple

declare const rgb2hsl: (r: number, g: number, b: number) => CommonColorTuple
declare const hsl2rgb: (h: number, s: number, l: number) => CommonColorTuple
declare const rgb2hsv: (r: number, g: number, b: number) => CommonColorTuple
declare const hsv2rgb: (h: number, s: number, v: number) => CommonColorTuple
declare const rgb2hsi: (r: number, g: number, b: number) => CommonColorTuple
declare const hsi2rgb: (h: number, s: number, i: number) => CommonColorTuple

declare const rgb2hwb: (r: number, g: number, b: number) => CommonColorTuple
declare function hwb2rgb(h: number, w: number, b: number): CommonColorTuple

declare const rgb2xyz: (r: number, g: number, b: number) => CommonColorTuple
declare const xyz2rgb: (x: number, y: number, z: number) => CommonColorTuple

declare const xyz2lab: (x: number, y: number, z: number) => CommonColorTuple
declare const lab2xyz: (l: number, a: number, b: number) => CommonColorTuple

declare const rgb2lab: (r: number, g: number, b: number) => CommonColorTuple
declare const lab2rgb: (l: number, a: number, b: number) => CommonColorTuple

declare const lab2lch: (l: number, a: number, b: number) => CommonColorTuple
declare const lch2lab: (l: number, c: number, h: number) => CommonColorTuple

declare const xyz2lch: (x: number, y: number, z: number) => CommonColorTuple
declare const lch2xyz: (l: number, c: number, h: number) => CommonColorTuple

declare const xyz2xyY: (x: number, y: number, z: number) => CommonColorTuple
declare const xyY2xyz: (x: number, y: number, Y: number) => CommonColorTuple

declare const __convertor_linear2rgb: typeof linear2rgb
declare const __convertor_rgb2linear: typeof rgb2linear
declare const __convertor_rgb2hex: typeof rgb2hex
declare const __convertor_hex2rgb: typeof hex2rgb
declare const __convertor_rgb2cmyk: typeof rgb2cmyk
declare const __convertor_cmyk2rgb: typeof cmyk2rgb
declare const __convertor_rgb2hsl: typeof rgb2hsl
declare const __convertor_hsl2rgb: typeof hsl2rgb
declare const __convertor_rgb2hsv: typeof rgb2hsv
declare const __convertor_hsv2rgb: typeof hsv2rgb
declare const __convertor_rgb2hsi: typeof rgb2hsi
declare const __convertor_hsi2rgb: typeof hsi2rgb
declare const __convertor_rgb2hwb: typeof rgb2hwb
declare const __convertor_hwb2rgb: typeof hwb2rgb
declare const __convertor_rgb2xyz: typeof rgb2xyz
declare const __convertor_xyz2rgb: typeof xyz2rgb
declare const __convertor_xyz2lab: typeof xyz2lab
declare const __convertor_lab2xyz: typeof lab2xyz
declare const __convertor_rgb2lab: typeof rgb2lab
declare const __convertor_lab2rgb: typeof lab2rgb
declare const __convertor_lch2lab: typeof lch2lab
declare const __convertor_lab2lch: typeof lab2lch
declare const __convertor_xyz2lch: typeof xyz2lch
declare const __convertor_lch2xyz: typeof lch2xyz
declare const __convertor_xyY2xyz: typeof xyY2xyz
declare const __convertor_xyz2xyY: typeof xyz2xyY
declare namespace __convertor {
  export {
    __convertor_linear2rgb as linear2rgb,
    __convertor_rgb2linear as rgb2linear,
    __convertor_rgb2hex as rgb2hex,
    __convertor_hex2rgb as hex2rgb,
    __convertor_rgb2cmyk as rgb2cmyk,
    __convertor_cmyk2rgb as cmyk2rgb,
    __convertor_rgb2hsl as rgb2hsl,
    __convertor_hsl2rgb as hsl2rgb,
    __convertor_rgb2hsv as rgb2hsv,
    __convertor_hsv2rgb as hsv2rgb,
    __convertor_rgb2hsi as rgb2hsi,
    __convertor_hsi2rgb as hsi2rgb,
    __convertor_rgb2hwb as rgb2hwb,
    __convertor_hwb2rgb as hwb2rgb,
    __convertor_rgb2xyz as rgb2xyz,
    __convertor_xyz2rgb as xyz2rgb,
    __convertor_xyz2lab as xyz2lab,
    __convertor_lab2xyz as lab2xyz,
    __convertor_rgb2lab as rgb2lab,
    __convertor_lab2rgb as lab2rgb,
    __convertor_lch2lab as lch2lab,
    __convertor_lab2lch as lab2lch,
    __convertor_xyz2lch as xyz2lch,
    __convertor_lch2xyz as lch2xyz,
    __convertor_xyY2xyz as xyY2xyz,
    __convertor_xyz2xyY as xyz2xyY
  }
}

/**
 * Create a color instance
 * @param colorInput Input your color value 设置颜色值
 * @param alpha Alpha range is [0, 100] 不透明度
 * @returns { Color } Color instance
 */
declare function colorsea(
  colorInput: CommonColorTuple | CommonColoraTuple | string,
  alpha?: number,
  config?: ColorConfig
): colorsea.Color
declare namespace colorsea {
  class Color {
    private cache
    private _rgb
    private _alpha
    constructor(
      colorInput: CommonColorTuple | CommonColoraTuple | string,
      a?: number,
      config?: ColorConfig
    )
    /**
     * ## Get or set the value of the red channel
     */
    red(): number
    red(amount: number): Color
    /**
     * ## Get or set the value of the green channel
     */
    green(): number
    green(amount: number): Color
    /**
     * ## Get or set the value of the blue channel
     */
    blue(): number
    blue(amount: number): Color
    /**
     * ## Get or set the value of the alpha channel
     */
    alpha(): number
    alpha(amount: number): Color
    /**
     * ## Increase opacity
     * @param amount The value of opacity increase, the default is 10, which means 10%
     * @param method If you fill in 'relative', it means that the parameter amount is a relative value
     * @returns new Color
     */
    fadeIn(amount?: number, method?: string): Color
    /**
     * ## Increase transparency (Reduce opacity)
     * @param amount The value of opacity reduction, the default is 10, which means 10%
     * @param method  If you fill in 'relative', it means that the parameter amount is a relative value
     * @returns Color instance
     */
    fadeOut(amount?: number, method?: string): Color
    opacify(amount?: number, method?: string): Color
    transparentize(amount?: number, method?: string): Color
    /**
     * ## get or set hue
     */
    hue(): number
    hue(amount: number): Color
    /**
     * ## get or set saturation
     */
    saturation(): number
    saturation(amount: number): Color
    /**
     * ## get or set lightness
     */
    lightness(): number
    lightness(amount: number): Color
    rgb(round?: boolean | number): CommonColorTuple
    rgba(round?: boolean | number): CommonColoraTuple
    cmyk(round?: boolean | number): CmykTuple
    hsl(round?: boolean | number): CommonColorTuple
    hsla(round?: boolean | number): CommonColoraTuple
    hsv(round?: boolean | number): CommonColorTuple
    hsi(round?: boolean | number): CommonColorTuple
    hwb(round?: boolean | number): CommonColorTuple
    xyz(round?: boolean | number): CommonColorTuple
    lab(round?: boolean | number): CommonColorTuple
    lch(round?: boolean | number): CommonColorTuple
    xyY(round?: boolean | number): CommonColorTuple
    /**
     * ## to hex
     * (zh) 转16进制色
     * @param alphaFlag alpha channel display switch
     * - 0: alpha is not displayed. (zh) 不展示alpha值，
     * - 1：alpha is displayed. (zh) 展示alpha值，
     * - 2：alpha is displayed when alpha is not equal to 100%. (zh) 当alpha不等于100%才展示alpha
     * @returns like '#000000'
     */
    hex(alphaFlag?: 0 | 1 | 2): string
    /**
     * ## Increase lightness
     * (zh) 增加光亮度
     * @param amount Lightness increase percentage, the default is 5, which means 5%。
     * * (zh) 光亮度增加百分多少, 默认为5，代表5%
     * @param method If you fill in 'relative', it means that the parameter amount is a relative value.
     * * (zh) 如果填入relative则表示参数amount为相对值
     * @returns Color Instance
     */
    lighten(amount?: number, method?: string): Color
    /**
     * ## Reduce lightness
     * (zh) 减少光亮度
     * @param amount The percentage of lightness reduction, the default is 5, which means 5%.
     * * (zh) 光亮度减少百分多少, 默认为5，代表5%
     * @param method If you fill in 'relative', it means that the parameter amount is a relative value.
     * * (zh) 如果填入relative则表示参数amount为相对值
     * @returns Color
     */
    darken(amount?: number, method?: string): Color
    /**
     * ## Increase saturation
     * (zh) 增加饱和度
     * @param amount  How much to increase the saturation, the default is 5, which means 5%.
     * * (zh) 饱和度增加百分多少, 默认为5，代表5%
     * @param method Use the relative value when entering relative
     * * (zh) 如果填入relative则表示参数amount为相对值
     * @returns new Color
     */
    saturate(amount?: number, method?: string): Color
    /**
     * ## Reduce saturation
     * 降低饱和度
     * @param amount The percentage of saturation reduction, the default is 5, which means 5%
     * * (zh) 饱和度减少百分多少, 默认为5，代表5%
     * @param method If you fill in 'relative', it means that the parameter amount is a relative value
     * * (zh) 如果填入relative则表示参数amount为相对值
     * @returns new Color
     */
    desaturate(amount?: number, method?: string): Color
    /**
     * ## Rotating hue
     * (zh) 旋转色相
     * @param angle Rotation angle
     * * (zh) 旋转角度
     */
    spin(angle: number): Color
    /**
     * ## Rotating hue
     * An alias for the spin method
     *
     * (zh) 旋转色相
     * @param angle Rotation angle
     * * (zh) 旋转角度
     */
    adjustHue(angle: number): Color
    /**
     * ## complementary color
     * (zh) 取得补色
     */
    complement(): Color
    /**
     * ## Invert color
     * (zh) 取得反色
     */
    invert(): Color
    /**
     * ## color mixing
     * (zh) 颜色混合
     * @param color Another color, which can be a Color instance, a hexadecimal
     * * (zh) 另一个颜色
     * @param weight The mixing ratio of another color, the default value is 50 or 50%
     * * (zh) 另一颜色(参数1)的混合比例，默认值为50即50%
     * @returns Color
     */
    mix(color: Color | string | CommonColoraTuple | CommonColorTuple, weight?: number): Color
    luma(): number
    /**
     * ## get Brightness
     * range: [0, 100]
     */
    brightness(): number
    /**
        * ## deltaE
        * (zh) 色差
        * @param sampleColor (zh) 样品颜色
        * @param mode The default is CMC, Choose one from CMC | CIE2000 | CIE1994 | CIE1976
        * @param setting Mode Setting
        - CMC: { l: number, c: number }
        - CIE2000: { kL: number; kC: number; kH: number }
        - CIE1994: { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' }
        */
    deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting): number
    /**
     * ## Check that one color is easily visible on another color
     * （zh）检查一个颜色在另一个颜色上是否易于可见
     * > https://www.w3.org/TR/AERT/#color-contrast
     *
     * @param anotherColor color for contrast
     * @param setting Setting value judged as poor visibility,{b, c}. （zh）判为差可见性的设置值 {b, c}
     * * b: brightness difference, the default value is 125, the range of brightness value is [0,255]
     * * c: color difference, the default value is 500
     * @returns {boolean} false时则为可见性比较差
     */
    visibility(
      anotherColor: Color | string | CommonColoraTuple | CommonColorTuple,
      setting?: {
        b: number
        c: number
      }
    ): boolean
  }
  var config: (config: ColorConfig) => void
  var random: () => Color
  var convertor: typeof __convertor
  var rgb: (r: number, g: number, b: number, alpha?: number | undefined) => Color
  var hsl: (h: number, s: number, l: number, alpha?: number | undefined) => Color
  var hsv: (h: number, s: number, v: number, alpha?: number | undefined) => Color
  var hsi: (h: number, s: number, i: number, alpha?: number | undefined) => Color
  var hwb: (h: number, a: number, b: number, alpha?: number | undefined) => Color
  var xyz: (x: number, y: number, z: number, alpha?: number | undefined) => Color
  var lab: (l: number, a: number, b: number, alpha?: number | undefined) => Color
  var lch: (l: number, c: number, h: number, alpha?: number | undefined) => Color
  var mix: (
    color1: string | CommonColorTuple | CommonColoraTuple | Color,
    color2: string | CommonColorTuple | CommonColoraTuple | Color,
    weight: number
  ) => Color
  var deltaE: (
    color1: Color,
    color2: Color,
    mode?: DeltaEMode,
    setting?: {} | DeltaESetting | undefined
  ) => number
  var utils: {
    /**
     * Rounding preserves the specified decimal place
     * 四舍五入保留指定的小数位
     */
    roundDecimal: (n: number, fractionDigits: number) => number
    /**
     * Generates a random number for a specified range
     * 从指定范围取随机数
     * @param min minimum
     * @param max maximum
     */
    randomRange: (min: number, max: number) => number
  }
  var useNames: (
    keywords: {
      [key: string]: string
    },
    formatFn?: ((key: string, value: string) => [string, string]) | undefined
  ) => typeof colorsea
}

export { colorsea as default }

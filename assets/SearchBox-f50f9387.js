import{u as F}from"./app-144d5ccf.js";import{r as g,h as w,C as M,c as A,S as N,u as P,_ as B,p as h,q as p,Z as H,a8 as j,Q as b,w as C,a2 as v,O as T,P as S,v as y,R as L,a9 as X}from"./framework-cbc93935.js";const W=[{path:"/",title:"colorsea.js",pathLocale:"/",contents:[]},{path:"/pages/About.html",title:"About",pathLocale:"/",contents:[{header:"About",slug:"about",content:`This is a tiny color tool library written in Typescript. You can use it to convert color spaces (RGB, HSL, HSV, HSI, HWB, XYZ, LAB, LCH, xyY),
Operate on colors like LESS/SASS (darken/lighten, saturate/desaturate, spin, fadeIn/fadeOut, mix).
Support CMC(l:c), CIE2000, CIE1994, CIE1976 color difference queries.
Support to use X11, Chinese Traditional Color, Japanese Traditional Color types of color names to get the color`}]},{path:"/pages/ColorOperation.html",title:"Color manipulation",pathLocale:"/",contents:[{header:"Color manipulation",slug:"color-manipulation",content:""},{header:"Example",slug:"example",content:`Example1：Darken the color by 20%
colorsea('#ff0000').darken(20) // #cc0000
#ff0000 -> #990000Example2：
You can perform continuous operations: Rotate hue 180 degrees -> Example1：Darken 30% -> Reduce saturation 10%
colorsea('#ff0000').spin(180).darken(30).desaturate(10) // Color: #0ac2c2
#ff0000 -> #056161TIP
Each operation will return a new Color instance object`},{header:"color.lighten()",slug:"color-lighten",content:`Increase lightness
/** * Increase lightness * @param amount Lightness increase percentage, the default is 5, which means 5% * @param method If you fill in 'relative', it means that the parameter amount is a relative value * @returns Color */
color.lighten(amount: number = 5, method?: string) => Color
Example: Increase lightness by 10%
colorsea('#338800').lighten(10) // Color: #46bb00
#338800 -> #46bb00`},{header:"color.darken()",slug:"color-darken",content:`Reduce lightness /** * Reduce lightness * @param amount The percentage of lightness reduction, the default is 5, which means 5% * @param method If you fill in 'relative', it means that the parameter amount is a relative value * @returns Color */
color.darken(amount: number = 5, method?: string) => Color
Example: Reduce lightness by 10%
colorsea('#338800').darken(10) // Color: #205500
#338800 -> #205500`},{header:"color.saturate()",slug:"color-saturate",content:`Increase saturation /** * Increase saturation * @param amount How much to increase the saturation, the default is 5, which means 5% * @param method If you fill in 'relative', it means that the parameter amount is a relative value * @returns new Color */
color.saturate(amount: number = 5, method?: string) => Color
Example: Increase saturation by 30%
colorsea('#E5B7A1').saturate(30) // Color: #f7b18f
#E5B7A1 -> #f7b18f`},{header:"color.desaturate()",slug:"color-desaturate",content:`Reduce saturation /** * Reduce saturation * @param amount The percentage of saturation reduction, the default is 5, which means 5% * @param method If you fill in 'relative', it means that the parameter amount is a relative value * @returns new Color */
color.desaturate(amount: number = 5, method?: string) => Color
Example: Reduce saturation by 50%
colorsea('#00ff00').desaturate(50) // Color: #40bf40
#00ff00 -> #40bf40`},{header:"color.spin()",slug:"color-spin",content:`Rotate hue
/** * Rotate hue * @param angle rotation angle */
color.spin(angle: number) => Color
Example: Rotate hue 90 degrees clockwise
colorsea('#00ff00').spin(90) // Color: #007fff
#00ff00 -> #007fff`},{header:"color.adjustHue()",slug:"color-adjusthue",content:"color.adjustHue is an alias of color.spin, the usage is consistent with color.spin"},{header:"color.complement()",slug:"color-complement",content:`Get the complementary color, equivalent to color.spin(180)
Example:
colorsea('#00ff00').complement() // Color: #0f00ff
#00ff00 -> #0f00ff`},{header:"color.invert()",slug:"color-invert",content:`reverse color
Example:
colorsea('#ff3366').invert() // Color: #00cc99
#ff3366 -> #00cc99colorsea('#cccccc').invert() // Color: #333333
#cccccc -> #333333`},{header:"color.mix()",slug:"color-mix",content:`color mixing
/** * color mixing * @param color Another color, which can be a Color instance, a hexadecimal color string, or an [r, g, b] color tuple * @param weight The mixing ratio of another color, the default value is 50 or 50% * @returns Color */
color.mix(color: Color, weight: number = 50) => Color
Example 1: rgb(30, 177, 250) mixed with 60% hsl(0, 100%, 20%)
colorsea([30, 177, 250]).mix(colorsea.hsl(0, 100, 20), 60) // Color #494764
rgb(30, 177, 250) .mix(hsl(0 100% 20%), 60) == rgb(73, 71, 100)Example 2: Mix of #CE9FFC and #EA5455, 50% each
const color1 = colorsea('#CE9FFC')
const color2 = colorsea('#EA5455')
color1.mix(color2) // Color #dc7aa9
// or color2 can not create a Color instance, directly use the hex string
color1.mix('#EA5455') // Color #dc7aa9
// or color2 is passed directly to the [r, g, b] tuple
color1.mix([234, 84, 85]) // Color #dc7aa9
#CE9FFC .mix(#EA5455, 50) == #dc7aa9Example 3: Continuous Mixing
colorsea('#0396FF').mix('#7367F0', 33).mix('#EA5455', 50) // #896da8
#0396FF .mix(#7367F0, 33).mix(#EA5455, 50) == #896da8`},{header:"color.fadeIn()",slug:"color-fadein",content:`Increase opacity /** * Increase opacity * @param amount The value of opacity increase, the default is 10, which means 10% * @param method If you fill in 'relative', it means that the parameter amount is a relative value * @returns new Color */
color.fadeIn(amount: number = 10, method?: string) => Color
Example:
colorsea('#ff0000', 10).fadeIn(30) // #ff000066
#ff00001a -> #ff000066`},{header:"color.fadeOut()",slug:"color-fadeout",content:`Reduce opacity /** * Reduce opacity * @param amount The value of opacity reduction, the default is 10, which means 10% * @param method If you fill in 'relative', it means that the parameter amount is a relative value * @returns new Color */
color.fadeOut(amount: number = 10, method?: string) => Color
Example:
colorsea('#ff0000', 100).fadeOut(50) // #ff000080
#ff0000 -> #ff000080`},{header:"color.opacify()",slug:"color-opacify",content:"color.opacify is an alias of color.fadeIn, the usage is consistent with color.fadeIn"},{header:"color.transparentize()",slug:"color-transparentize",content:"color.transparentize is an alias of color.fadeOut, the usage is consistent with color.fadeOut"}]},{path:"/pages/Converting.html",title:"Color converting",pathLocale:"/",contents:[{header:"Color converting",slug:"color-converting",content:`After the color instance is created, the corresponding color space value can be obtained by the following methods of the color instance, so that the color space conversion can be easily carried out.
TIP
Methods include: rgb() cmyk() hsl() hsv() hsi() hwb() xyz() lab() lch() xyY()
The method has a parameter round, its type is Boolean | number
The default value is true When true, the number of decimal places is left as default.
When false, all calculated decimal places are returned.
When number, specifies how many decimal places to reserve. Example：
// hsl to rgb
const color = colorsea.hsl(0, 100, 50)
color.rgb() // [255, 0, 0]
// to lab
color.lab() // [53.24, 80.09, 67.2]
// Do not deal with decimals
color.lab(false) // [ 53.24079414130722, 80.09245959641109, 67.20319651585301 ] // The other color space methods are similar...`},{header:"color.rgb()",slug:"color-rgb",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [r, g, b]"},{header:"color.rgba()",slug:"color-rgba",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [r, g, b, alpha]"},{header:"color.cmyk()",slug:"color-cmyk",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [c, m, y, k]"},{header:"color.hsl()",slug:"color-hsl",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [h, s, l]"},{header:"color.hsla()",slug:"color-hsla",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [h, s, l, alpha]"},{header:"color.hsv()",slug:"color-hsv",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [h, s, v]"},{header:"color.hsi()",slug:"color-hsi",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [h, s, i]"},{header:"color.hwb()",slug:"color-hwb",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (default value) Returns an integer without reserving a decimal number: specifies the number of decimal places @return [h, w, b]"},{header:"color.xyz()",slug:"color-xyz",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (Default value) Number of decimal places to keep: 2 number: specifies the number of decimal places @return [x, y, z]"},{header:"color.lab()",slug:"color-lab",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (Default value) Number of decimal places to keep: 2 number: specifies the number of decimal places @return [l, a, b]"},{header:"color.lch()",slug:"color-lch",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (Default value) Number of decimal places to keep: 2 number: specifies the number of decimal places @return [l, c, h]"},{header:"color.xyY()",slug:"color-xyy",content:"@param round: boolean | number false: returns all decimal places without decimal processing true: (Default value) Number of decimal places to keep: 2 number: specifies the number of decimal places @return [x, y, Y]"},{header:"color.hex()",slug:"color-hex",content:`@param alphaFlag: 0 | 1 | 2 0: do not display alpha value,
1: display alpha value,
2: (default value) only show alpha when alpha is not equal to 100% @return Returns an RGB hex string`}]},{path:"/pages/CreateInstance.html",title:"Create a Color instance object",pathLocale:"/",contents:[{header:"Create a Color instance object",slug:"create-a-color-instance-object",content:""},{header:"colorsea()",slug:"colorsea",content:`Create a color instance object using the colorsea(rgb, alpha) function.
/**
The colorsea function takes two arguments:
@param rgb string | [number, number, number] (Required) A hexadecimal rgb value, or an [r, g, b] tuple
@param alpha number (Optional) Opacity in the range of [0, 100]. The default value is 100, which is 100% */ // You can pass in a HEX string
colorsea('#cc0020', 90)
// or [R, G, B]
colorsea([204, 0, 32], 90)
colorsea('#cc0020', 90)
The first parameter of colorsea() also supports passing in color names. When using these color names, you need to load the name mapping relationship table separately. The currently supported color names are X11 color names, Chinese traditional colors, Japanese Traditional Colors. You can also customize the color name. For specific usage, please refer to the document Using Color Names In addition to creating Color instance objects through the colorsea function, you can also create Color instances through other color space methods
const { rgb, hsl, hsv, hsi, hwb, xyz, lab, lch } = colorsea
/**
* All of the above color space methods accept four parameters,
* The first three parameters are mandatory and are the color setting values of the color space.
* The fourth parameter is the alpha channel, which is not required. The default value is 100, which is 100% opaque.
*/ const color = rgb(255, 0, 0)
const color2 = hsl(0, 100, 50)
// ...`},{header:"colorsea.rgb",slug:"colorsea-rgb",content:`colorsea.rgb(r, g, b, alpha) is equal to colorsea(rgb, alpha)
/**
@param r number Red, Range [0, 255]
@param g number Green, Range [0, 255]
@param b number Blue, Range [0, 255]
@param alpha number alpha, range [0, 100]
*/
colorsea.rgb(r: number, g: number, b: number, alpha?: number) // Example
colorsea.rgb(100, 20, 92)
colorsea.rgb(100, 20, 92)`},{header:"colorsea.hsl",slug:"colorsea-hsl",content:`/**
@param h number hue range[0, 360)
@param s number saturation range[0, 100]
@param l number lightness range[0, 100]
@param alpha number alpha range[0, 100]
*/
colorsea.hsl(h: number, s: number, l: number, alpha?: number) // Example
colorsea.hsl(180, 90, 32)
colorsea.hsl(180, 90, 32)`},{header:"colorsea.hsv",slug:"colorsea-hsv",content:`/**
@param h number hue range[0, 360)
@param s number saturation range[0, 100]
@param v number brightness value range[0, 100]
@param alpha number alpha range[0, 100]
*/
colorsea.hsv(h: number, s: number, v: number, alpha?: number) // Example
colorsea.hsv(100, 100, 50)
colorsea.hsv(100, 100, 50)`},{header:"colorsea.hsi",slug:"colorsea-hsi",content:`/**
@param h number hue range[0, 360)
@param s number 饱和度 range[0, 100]
@param i number 亮度Intensity range[0, 100]
@param alpha number alpha range[0, 100]
*/
colorsea.hsi(h: number, s: number, i: number, alpha?: number) // Example
colorsea.hsi(55, 9, 31)
colorsea.hsi(55, 9, 31)`},{header:"colorsea.hwb",slug:"colorsea-hwb",content:`/**
@param h number hue range[0, 360)
@param w number whiteness range[0, 100]
@param b number blackness range[0, 100]
@param alpha number alpha range[0, 100]
*/
colorsea.hwb(h: number, w: number, b: number, alpha?: number) // Example
colorsea.hwb(200, 30, 47)
colorsea.hwb(200, 30, 47)`},{header:"colorsea.cmyk",slug:"colorsea-cmyk",content:`/**
@param c number Cyan range[0, 100]
@param m number Magenta range[0, 100]
@param y number Yellow range[0, 100]
@param k number black range[0, 100]
@param alpha number alpha range[0, 100]
*/
colorsea.cmyk(c: number, m: number, y: number, k: number, alpha?: number) // Example
colorsea.cmyk(65, 40, 0, 21.57)
colorsea.cmyk(65, 40, 0, 21.57)`},{header:"colorsea.xyz",slug:"colorsea-xyz",content:`/**
@param x number x @param y number y @param z number z @param alpha number alpha range[0~100]
*/
colorsea.xyz(x: number, y: number, z: number, alpha?: number) // Example
colorsea.xyz(36.44, 21.54, 20.98)
colorsea.xyz(36.44, 21.54, 20.98)`},{header:"colorsea.lab",slug:"colorsea-lab",content:`/**
@param l number L* [0,100]
@param a number a* Red to green [127,-128]
@param b number b* Yellow to blue [127,-128]
@param alpha number alpha range[0, 100]
*/
colorsea.lab(l: number, a: number, b: number, alpha?: number) // Example
colorsea.lab(50.57, 8.77, -46.64)
colorsea.lab(50.57, 8.77, -46.64)`},{header:"colorsea.lch",slug:"colorsea-lch",content:`/**
@param l number lightness
@param c number chroma
@param h number hue [0, 360)
@param alpha number alpha range[0~100]
*/
colorsea.lch(l: number, c: number, h: number, alpha?: number) // Example
colorsea.lch(50, 120, 20)
colorsea.lch(50, 120, 20)`},{header:"colorsea.random",slug:"colorsea-random",content:`Generate random color
colorsea.random()`}]},{path:"/pages/Diff.html",title:"color difference （deltaE）",pathLocale:"/",contents:[{header:"color difference （deltaE）",slug:"color-difference-deltae",content:`cThe color instance contains a deltaE method. Can be used to query color difference, it supports CMC, CIE2000, CIE1994, CIE1976 color difference formula query
color.deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting) => number
Note: The current color instance object color is standard color, the first parameter sampleColor is sample color
Parameter Description: @param sampleColor sample color
@param mode Color difference mode, which formula to use to calculate color difference, the default value is CMC, there are the following options: CMC | CIE2000 | CIE1994 | CIE1976
@param setting Different color difference formulas have different coefficients that can be set CMC: { l: number, c: number } The default value is { l: 1, c: 1 }
CIE2000: { kL: number; kC: number; kH: number } The default value is { kL: 1; kC: 1; kH: 1 }
CIE1994:{ kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' } The default value is { kL: 1; kC: 1; kH: 1, cate: 'graphic' }, When cate is textiles, the value of kL will become 2, regardless of the setting`},{header:"CMC(l:c)",slug:"cmc-l-c",content:`Example：
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color // Use the CMC(1:1) formula
color1.deltaE(color2, 'CMC') // 5.754...
// The second parameter defaults to 'CMC', so the second parameter can be omitted
color1.deltaE(color2) // CMC(2:1) formula, just set 'l' to 2 ('c' defaults to 1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719... TIP
In the CMC (l:c) color difference formula, l represents the weighted value of lightness, which adjusts the relative width of lightness; c represents the weighted value of chroma, which adjusts the relative width of chroma. Depending on the industry, you can adjust the influence of lightness and saturation on the total color difference by adjusting the value of l or c. When evaluating the perception of color difference, it is recommended to use l:c = 1:1, such as paint, plastic industry.
When evaluating the acceptability of color difference, it is recommended to use l:c = 2: 1, and it is recommended to use l:c = 2: 1 to control product quality in textile printing and dyeing industries`},{header:"CIE2000",slug:"cie2000",content:`Example：
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color // Using the CIE2000 formula
color1.deltaE(color2, 'CIE2000') // 3.6815... // Efficacy coefficient, kL, kC, kH default value is 1
color1.deltaE(color2, 'CIE2000', { kL：1, kC: 1: kH: 1})`},{header:"CIE1994",slug:"cie1994",content:`Example：
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color // Using the CIE1994 formula
color1.deltaE(color2, 'CIE1994') // 3.3725... // Effect coefficient, kL, kC, kH default value is 1
color1.deltaE(color2, 'CIE1994', { kL：1, kC: 1: kH: 1}) // Note: The default value of cate is 'graphic', that is, graphic arts
// If used for fabric evaluation, set cate to 'textiles'.
color1.deltaE(color2, 'CIE1994', { cate: 'textiles'}) TIP
When { cate: 'textiles' }, the coefficient kL will ignore the custom setting and automatically become 2.`},{header:"CIE1976",slug:"cie1976",content:`Example：
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color // Using the CIE1976 formula
color1.deltaE(color2, 'CIE1976') // 20.1246...`}]},{path:"/pages/Names.html",title:"Use color names",pathLocale:"/",contents:[{header:"Use color names",slug:"use-color-names",content:`You can create a Color instance by color name, but you must first load the color name mapping relationship through colorsea.useName(colorNames) method.
Now supports x11 color names, Chinese traditional colors, Japanese traditional colors
Example 1: Basic usage
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// Load X11 color names
colorsea.useNames(x11) // At this point you can directly use the X11 color name to create the color
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
Aqua: #00ffff - Aquamarine: #7fffd4Example 2: Load multiple types of color names at the same time
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
import chinese from 'colorsea/colors/chinese'
// Load the x11 name and traditional Chinese colors, which can be chained
colorsea.useNames(x11).useNames(chinese) colorsea('Beige') // color: #F5F5DC
colorsea('山梗紫') // color: #61649f
Beige: #F5F5DC - 山梗紫: #61649fExample 3: Prefixing color names
When loading color names of different series, if the name keywords conflict, the one loaded later will overwrite the one loaded earlier. To this end, you can format the name keywords uniformly, add a prefix to the keywords, and avoid conflicts.
The second parameter of the colorsea.useNames() method can pass in a callback function. This function has two parameters key and value, corresponding to the color name (key) and color value (value), which must return A tuple containing the processed [key,value]
import colorsea from 'colorsea'
import chineseTr from 'colorsea/colors/chineseTr'
import nippon from 'colorsea/colors/nippon'
// Load Chinese traditional color (traditional), and Japanese traditional color at the same time
colorsea .useNames(chineseTr, (key, value) => [\`zh:\${key}\`, value]) .useNames(nippon, (key, value) => [\`np:\${key}\`, value]) // Prefix is required when calling
colorsea('zh:潮蓝') // color: #2983bb
colorsea('np:紺青') // color: #113285
潮蓝: #2983bb - 紺青: #113285`},{header:"X11 color names",slug:"x11-color-names",content:`In computing, on the X Window System, X11 color names are represented in a simple text file, which maps certain strings to RGB color values. It was traditionally shipped with every X11 installation,
The Web Color List is derived from it, and CSS3 has adopted most of the X11 colors.
// Load
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
colorsea.useNames(x11)
// Use
colorsea('Aqua') // color: #00ffff
The following table is from the web "X11 Colors" list of the CSS3 specification
TIP For more information about X11 color names, please refer to:https://en.wikipedia.org/wiki/X11_color_names The color name keywords in the following table come from: https://www.w3.org/TR/css-color-3/#svg-color`},{header:"Chinese traditional colors",slug:"chinese-traditional-colors",content:`TIP
Chinese traditional colors refer to: http://zhongguose.com/
Contains two versions of Simplified Chinese and Traditional Chinese, please load as needed Simplified Chinese：'colorsea/colors/chinese'
Traditional Chinese：'colorsea/colors/chineseTr' // Load
import colorsea from 'colorsea'
import chinese from 'colorsea/colors/chinese'
// Traditional Chinese version please inport 'colorsea/colors/chineseTr':
// import chineseTr from 'colorsea/colors/chineseTr'
colorsea.useNames(chinese)
// Use
colorsea('山梗紫') // color: #61649f`},{header:"Japanese traditional colors (Nippon colors)",slug:"japanese-traditional-colors-nippon-colors",content:`TIP
Japanese traditional colors refer to: https://nipponcolors.com/
Contains two versions of Kanji and Romanji, please load as needed Kanji: 'colorsea/colors/nippon'
Romanji: 'colorsea/colors/nipponRm' // Load
import colorsea from 'colorsea'
import nippon from 'colorsea/colors/nippon'
// 罗马字版本请加载 'colorsea/colors/nipponRm'
// import nipponRm from 'colorsea/colors/nipponRm'
colorsea.useNames(nippon)
// Use
colorsea('桑染') // color: #64363C`},{header:"Custom color name",slug:"custom-color-name",content:`In addition to using the preset color names above, you can also customize the color names. For details, please refer to the following examples
import colorsea from 'colorsea' // Define an object to store the relationship of \`color name: color value\` in the form of \`key: value\`.
const myColorNames = { supperred: '#ff3333', almond: '#f7e8aa', milky: '#f9f4dc'
} // Load the color name you just customized
colorsea.useNames(myColorName) // Use
colorsea('milky') // color #f9f4dc Notice
When customizing color names, the keys of all color names must be in lowercase. Case insensitive when using`}]},{path:"/pages/QuickStart.html",title:"Quick Start",pathLocale:"/",contents:[{header:"Quick Start",slug:"quick-start",content:""},{header:"Installation",slug:"installation",content:"pnpm install colorsea yarn add colorsea npm install colorsea"},{header:"Import & Use",slug:"import-use",content:""},{header:"Import",slug:"import",content:`import colorsea from 'colorsea' const colorsea = require('colorsea') <script src="path/to/colorsea.js"><\/script>`},{header:"Color space conversion",slug:"color-space-conversion",content:`// ----- color conversion
colorsea('#ff0000').rgb() // [255, 0, 0]
colorsea('#ff0000', 50).rgba() // [255, 0, 0, 50]
// The colorsea() function can create a Color instance
const color = colorsea('#405060')
color.rgba() // [255, 0, 0, 50]
color.xyz() // [7.09, 7.67, 12.17]
color.lab() // [33.29, -1.94, -11.36] // Convert from other color spaces
colorsea.xyz(7.09, 7.67, 12.17).rgb() // [64, 80, 96]
colorsea.hsl(210, 20, 31.37).rgb() // [64, 80, 96]
// ... Other color spaces are similar`},{header:"Color operations",slug:"color-operations",content:`// ---- Color operations
const color = colorsea('#ffffff')
const newColor = color.darken(10) // All operations will return a new Color instance object
newColor.hex() // #e6e6e6
colorsea('#000').lighten(10).hex() // #1a1a1a
colorsea('#ff0000').spin(180).hex() // #00ffff
colorsea.hsl(80, 90, 20).saturate(10).hsl() // [80, 100, 20]
colorsea.hsl(80, 90, 20).desaturate(10).hsl() // [80, 80, 20]
colorsea('#776600').fadeOut(10).rgba() // [119, 102, 0, 90] const color1 = new Color('#ff0000')
const color2 = new Color('#0000ff')
const color = color1.mix(color2, 20)
color.hex() // #cc0033`},{header:"Color difference calculation",slug:"color-difference-calculation",content:`const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color // CMC(1:1)
color1.deltaE(color2, 'CMC') // 5.754... // CMC(2:1) formula, just set the weight factor l to 2 (c defaults to 1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719... // CIE2000
color1.deltaE(color2, 'CIE2000') // 3.6815... // CIE1994
color1.deltaE(color2, 'CIE1994') // 3.3725... // CIE1976
color1.deltaE(color2, 'CIE1976') // 20.1246...`},{header:"Use color names",slug:"use-color-names",content:`import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// Load X11 color names
colorsea.useNames(x11) // At this point you can directly use the X11 color name to create the color instance
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
import chinese from 'colorsea/colors/chinese' // Chinese traditional color
import nippon from 'colorsea/colors/nippon' // Japanese traditional color
// load both
colorsea.useNames(chinese).useNames(nippon) // use
colorsea('山梗紫') // color: #61649F
colorsea('水がき') // color: #B9887D`}]},{path:"/pages/Value.html",title:"Get and set value",pathLocale:"/",contents:[{header:"Get and set value",slug:"get-and-set-value",content:""},{header:"color.red()",slug:"color-red",content:`color.red() => number
color.red(amount: number) => Color parameter amount?: number When the amount is not passed in, get the value of the red channel of rgb, and the value range is [0, 255]
When the amount is passed in, modify the value of the red channel and return a new Color instance Example 1: Get the red channel value
colorsea('#ffcc22').red() // 255
Example 2: Set the red channel to 200
colorsea('#ffcc22').red(200) // Color #c8cc22
#ffcc22 -> #c8cc22`},{header:"color.green()",slug:"color-green",content:`color.green() => number
color.green(amount: number) => Color parameter amount?: number When the amount is not passed in, get the value of the green channel of rgb, and the value range is [0, 255]
When the amount is passed in, modify the value of the green channel and return a new Color instance Example 1: Get the green channel value
colorsea('#ffcc22').green() // 204
Example 2: Set the green channel to 100
colorsea('#ffcc22').green(100) // Color #ff6422
#ffcc22 -> #ff6422`},{header:"color.blue()",slug:"color-blue",content:`color.blue() => number
color.blue(amount: number) => Color parameter amount?: number When the amount is not passed in, get the value of the blue channel of rgb, and the value range is [0, 255]
When the amount is passed in, it modifies the value of the blue channel and returns a new Color instance Example 1: Get the blue channel value
colorsea('#ffcc22').blue() // 34
Example 2: Set the blue channel to 255
colorsea('#ffcc22').blue(255) // Color #ffccff
#ffcc22 -> #ffccff`},{header:"color.hue()",slug:"color-hue",content:`color.hue() => number
color.hue(amount: number) => Color parameter amount?: number When the amount is not passed in, the hue value is obtained, and the range is [0, 360)
When the amount is passed in, the hue value is modified and a new Color instance is returned Example 1: get hue
colorsea('#ffcc22').hue() // 46
Example 2: Set hue to 120°
colorsea('#ffcc22').hue(120) // Color #24ff24
#ffcc22 -> #24ff24`},{header:"color.saturation()",slug:"color-saturation",content:`color.saturation() => number
color.saturation(amount: number) => Color parameter amount?: number When the amount is not passed in, get the saturation value, the range is [0, 100]
When the amount is passed in, the saturation is modified and a new Color instance is returned Example 1: Get Saturation
colorsea('#ffcc22').saturation() // 100
Example 2: Set saturation to 20%
colorsea('#ffcc22').saturation(20) // Color #a79d7b
#ffcc22 -> #a79d7b`},{header:"color.lightness()",slug:"color-lightness",content:`color.lightness() => number
color.lightness(amount: number) => Color parameter amount?: number When the amount is not passed in, get the lightness, the range is [0, 100]
When the amount is passed in, it is used to modify the lightness and return a new Color instance Example 1: Get lightness
colorsea('#ffcc22').lightness() // 57
Example 2: Set lightness to 30%
s
colorsea('#ffcc22').lightness(30) // Color #664e00
#ffcc22 -> #664e00`},{header:"color.alpha()",slug:"color-alpha",content:`color.alpha() => number
color.alpha(amount: number) => Color parameter amount?: number When the amount is not passed in, the value of the alpha channel is obtained, and the range is [0, 100]
When the amount is passed in, modify the value of the alpha channel and return a new Color instance Example 1: Get Opacity
colorsea('#22994a', 90).alpha() // 90
Example 2: Set the opacity to 30%
colorsea('#22994a', 90).alpha(30) // Color #22994a33
#22994a -> #22994a33`},{header:"color.luma()",slug:"color-luma",content:`get luma
color.luma() => number
Example:
colorsea('#22994a').luma() // 0.23616959154733871`},{header:"color.brightness()",slug:"color-brightness",content:`get Brightness
range: [0, 100]
color.brightness() => number
Example:
colorsea('#FFFFFF').brightness() // 100`},{header:"color.visibility()",slug:"color-visibility",content:`Check that one color is easily visible on another color,
If false is returned, visibility is poor. refer to: https://www.w3.org/TR/AERT/#color-contrast /** * @param anotherColor color for contrast * @param setting Setting value judged as poor visibility,{b, c}. * * b: brightness difference, the default value is 125, the range of brightness value is [0,255] * * c: color difference, the default value is 500 */ color.visibility( anotherColor: Color | string | CommonColoraTuple | CommonColorTuple, setting?: { b: number; c: number } ) => boolean
Example:
colorsea('red').visibility(colorsea('#ee6666')) // false
colorsea('#ffff00').visibility('#000000') // true
#ff0000, #ee6666, return false, #ffff00, #000000, return true
TIP
For methods such as color.red(),color.green(),color.blue(),color.hue(),color.saturation(),color.lightness(), color.alpha(),color.luma(), if the calculation result is a decimal, all decimal places will be returned, and the result will not be rounded or how many decimal places will be truncated.`}]},{path:"/zh/About.html",title:"关于",pathLocale:"/zh/",contents:[{header:"关于",slug:"关于",content:`colorsea是一个轻量的使用Typescript编写的颜色工具库 你可以使用此进行颜色空间的转换(RGB, HSL, HSV, HSI, HWB, XYZ, LAB, LCH, xyY)。
又或者像LESS/SASS那样对颜色进行操作（darken/lighten, saturate/desaturate, spin, fadeIn/fadeOut, mix)。
支持CMC(l:c)、 CIE2000、 CIE1994、 CIE1976等色差查询。
还可以使用X11、中国传统色、日本传统色等颜色名称来取得颜色。`}]},{path:"/zh/ColorOperation.html",title:"颜色操作",pathLocale:"/zh/",contents:[{header:"颜色操作",slug:"颜色操作",content:""},{header:"示例",slug:"示例",content:`示例1： 加深颜色 20%
colorsea('#ff0000').darken(20) // #cc0000
#ff0000 -> #990000示例2：
你可以进行连续操作: 旋转色相 180度 -> 加深30% -> 减少饱和度 10%
colorsea('#ff0000').spin(180).darken(30).desaturate(10) // Color: #0ac2c2
#ff0000 -> #056161TIP
每次操作都会返会一个新的Color实例对象`},{header:"color.lighten()",slug:"color-lighten",content:`增加亮度
/** * Increase lightness * 增加亮度 * @param amount 光亮度增加百分多少, 默认为5，代表5% * @param method 如果填入relative则表示参数amount为相对值 * @returns Color */
color.lighten(amount: number = 5, method?: string) => Color
例：增加亮度10%
colorsea('#338800').lighten(10) // Color: #46bb00
#338800 -> #46bb00`},{header:"color.darken()",slug:"color-darken",content:`减少光亮度 /** * Reduce lightness * 减少光亮度 * @param amount 光亮度减少百分多少, 默认为5，代表5% * @param method 如果填入relative则表示参数amount为相对值 * @returns Color */
color.darken(amount: number = 5, method?: string) => Color
例：减少光亮度10%
colorsea('#338800').darken(10) // Color: #205500
#338800 -> #205500`},{header:"color.saturate()",slug:"color-saturate",content:`增加饱和度 /** * Increase saturation * 增加饱和度 * @param amount 饱和度增加百分多少, 默认为5，代表5% * @param method 如果填入relative则表示参数amount为相对值 * @returns new Color */
color.saturate(amount: number = 5, method?: string) => Color
例：增加饱和度30%
colorsea('#E5B7A1').saturate(30) // Color: #f7b18f
#E5B7A1 -> #f7b18f`},{header:"color.desaturate()",slug:"color-desaturate",content:`降低饱和度 /** * Reduce saturation * 降低饱和度 * @param amount 饱和度减少百分多少, 默认为5，代表5% * @param method 如果填入relative则表示参数amount为相对值 * @returns new Color */
color.desaturate(amount: number = 5, method?: string) => Color
例：降低饱和度50%
colorsea('#00ff00').desaturate(50) // Color: #40bf40
#00ff00 -> #40bf40`},{header:"color.spin()",slug:"color-spin",content:`旋转色相
/** * Rotating hue * 旋转色相 * @param angle rotation angle 旋转角度 */
color.spin(angle: number) => Color
例：顺时针旋转色相90度
colorsea('#00ff00').spin(90) // Color: #007fff
#00ff00 -> #007fff`},{header:"color.adjustHue()",slug:"color-adjusthue",content:"color.adjustHue为color.spin的别名，用法与color.spin一致"},{header:"color.complement()",slug:"color-complement",content:`取得补色，相当于 color.spin(180)
例：
colorsea('#00ff00').complement() // Color: #0f00ff
#00ff00 -> #0f00ff`},{header:"color.invert()",slug:"color-invert",content:`反色
例：
colorsea('#ff3366').invert() // Color: #00cc99
#ff3366 -> #00cc99colorsea('#cccccc').invert() // Color: #333333
#cccccc -> #333333`},{header:"color.mix()",slug:"color-mix",content:`颜色混合
/** * mix color * 颜色混合 * @param color 另一个颜色, 可以是Color实例，也可以是16进制颜色字符串，或者rgb颜色数组 * @param weight 另一颜色的混合比例，默认值为50即50% * @returns Color */
color.mix(color: Color, weight: number = 50) => Color
例1：rgb(30, 177, 250)混合60%的hsl(0, 100%, 20%)
colorsea([30, 177, 250]).mix(colorsea.hsl(0, 100, 20), 60) // Color #494764
rgb(30, 177, 250) .mix(hsl(0 100% 20%), 60) == rgb(73, 71, 100)例2：#CE9FFC 和 #EA5455 混合，各占50%
const color1 = colorsea('#CE9FFC')
const color2 = colorsea('#EA5455')
color1.mix(color2) // Color #dc7aa9
// or color2可以不创建Color实例，直接使用hex字符串
color1.mix('#EA5455') // Color #dc7aa9
// or color2直接传入RGB数组
color1.mix([234, 84, 85]) // Color #dc7aa9
#CE9FFC .mix(#EA5455, 50) == #dc7aa9例3：连续mix
colorsea('#0396FF').mix('#7367F0', 33).mix('#EA5455', 50) // #896da8
#0396FF .mix(#7367F0, 33).mix(#EA5455, 50) == #896da8`},{header:"color.fadeIn()",slug:"color-fadein",content:`增加不透明度 /** * Increase opacity * 增加不透明度 * @param amount 不透明度增加的数值, 默认为10，代表10% * @param method 如果填入relative则表示参数amount为相对值 * @returns new Color */
color.fadeIn(amount: number = 10, method?: string) => Color
例：
colorsea('#ff0000', 10).fadeIn(30) // #ff000066
#ff00001a -> #ff000066`},{header:"color.fadeOut()",slug:"color-fadeout",content:`减少不透明度 /** * Reduce opacity * 减少不透明度 * @param amount 不透明度减少的数值, 默认为10，代表10% * @param method 如果填入relative则表示参数amount为相对值 * @returns new Color */
color.fadeOut(amount: number = 10, method?: string) => Color
例：
colorsea('#ff0000', 100).fadeOut(50) // #ff000080
#ff0000 -> #ff000080`},{header:"color.opacify()",slug:"color-opacify",content:"color.opacify 为 color.fadeIn 别名，用法与 color.fadeIn 一致"},{header:"color.transparentize()",slug:"color-transparentize",content:"color.transparentize 为 color.fadeOut 别名，用法与 color.fadeOut 一致"}]},{path:"/zh/Converting.html",title:"颜色空间转换",pathLocale:"/zh/",contents:[{header:"颜色空间转换",slug:"颜色空间转换",content:`创建color实例后，可以通过color实例的以下这些方法取得对应的颜色空间数值，从而轻易地进行颜色空间转换。
TIP
方法包括：rgb() cmyk() hsl() hsv() hsi() hwb() xyz() lab() lch() xyY()
这些方法都有一个参数round，其类型为boolean | number
默认值为 true 当为 true 时，按默认的设定保留小数位数。
为 false 时，将返回所有计算出的小数位。
为 number 时，用于指定保留多少位小数。 示例：
// hsl to rgb
const color = colorsea.hsl(0, 100, 50)
color.rgb() // [255, 0, 0]
// to lab
color.lab() // [53.24, 80.09, 67.2]
// 不处理小数
color.lab(false) // [ 53.24079414130722, 80.09245959641109, 67.20319651585301 ] // 其它颜色空间方法类似...`},{header:"color.rgb()",slug:"color-rgb",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[r, g, b]`},{header:"color.rgba()",slug:"color-rgba",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[r, g, b, alpha]`},{header:"color.cmyk()",slug:"color-cmyk",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[c, m, y, k]`},{header:"color.hsl()",slug:"color-hsl",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[h, s, l]`},{header:"color.hsla()",slug:"color-hsla",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[h, s, l, alpha]`},{header:"color.hsv()",slug:"color-hsv",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[h, s, v]`},{header:"color.hsi()",slug:"color-hsi",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[h, s, i]`},{header:"color.hwb()",slug:"color-hwb",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）返回整数，不保留小数
number: 自定义指定多少位小数 @return 返回[h, w, b]`},{header:"color.xyz()",slug:"color-xyz",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）保留小数位数：2
number: 自定义指定多少位小数 @return 返回[x, y, z]`},{header:"color.lab()",slug:"color-lab",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）保留小数位数：2
number: 自定义指定多少位小数 @return 返回[l, a, b]`},{header:"color.lch()",slug:"color-lch",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）保留小数位数：2
number: 自定义指定多少位小数 @return 返回[l, c, h]`},{header:"color.xyY()",slug:"color-xyy",content:`@param round: boolean | number false: 不进行小数处理，返回所有小数位
true: （默认值）保留小数位数：2
number: 自定义指定多少位小数 @return 返回[x, y, Y]`},{header:"color.hex()",slug:"color-hex",content:`@param alphaFlag: 0 | 1 | 2 0: 不展示alpha值，
1：展示alpha值，
2：(默认值)当alpha不等于100%才展示alpha @return 返回RGB十六进制字符串`}]},{path:"/zh/CreateInstance.html",title:"创建Color实例",pathLocale:"/zh/",contents:[{header:"创建Color实例",slug:"创建color实例",content:""},{header:"colorsea()",slug:"colorsea",content:`使用colorsea(rgb, alpha)函数创建一个颜色实例对象，
/**
colorsea函数包含两个参数:
@param rgb string | [number, number, number] （必填）十六进制rgb值，或[r, g, b]数组
@param alpha number （非必填）不透明度，按受[0, 100]的范围，默认值为100，即100% */ // 可以传入HEX字
colorsea('#cc0020', 90)
// or [R, G, B]
colorsea([204, 0, 32], 90)
colorsea('#cc0020', 90)
colorsea()的第一个参数还支持传入颜色名称，使用这些颜色名称时，要另外加载名称映射关系表，现支持的颜色名称有X11 color names、中国传统色、日本传统色。也可以自定义颜色名，具体用法请参看文档使用颜色名称 除了通过colorsea函数创建Color实例对象外，还可以通过其它颜色空间方法创建Color实例
const { rgb, hsl, hsv, hsi, hwb, xyz, lab, lch } = colorsea
/**
* 以上所有颜色空间方法，都接受4个参数，
* 前三个参数为必填项，是该颜色空间的颜色设定值，
* 第4个参数为alpha通道，非必填，默认值为100，即为100%不透明。
*/ const color = rgb(255, 0, 0)
const color2 = hsl(0, 100, 50)
// ...`},{header:"colorsea.rgb",slug:"colorsea-rgb",content:`colorsea.rgb(r, g, b, alpha) 等同于 colorsea(rgb, alpha)
/**
@param r number 红 范围[0, 255]
@param g number 绿 范围[0, 255]
@param b number 蓝 范围[0, 255]
@param alpha number alpha 范围[0, 100]
*/
colorsea.rgb(r: number, g: number, b: number, alpha?: number) // 示例
colorsea.rgb(100, 20, 92)
colorsea.rgb(100, 20, 92)`},{header:"colorsea.hsl",slug:"colorsea-hsl",content:`/**
@param h number 色相 范围[0, 360)
@param s number 饱和度 范围[0, 100]
@param l number 光亮度 范围[0, 100]
@param alpha number alpha 范围[0, 100]
*/
colorsea.hsl(h: number, s: number, l: number, alpha?: number) // 示例
colorsea.hsl(180, 90, 32)
colorsea.hsl(180, 90, 32)`},{header:"colorsea.hsv",slug:"colorsea-hsv",content:`/**
@param h number 色相 范围[0, 360)
@param s number 饱和度 范围[0, 100]
@param v number 明度 范围[0, 100]
@param alpha number alpha 范围[0, 100]
*/
colorsea.hsv(h: number, s: number, v: number, alpha?: number) // 示例
colorsea.hsv(100, 100, 50)
colorsea.hsv(100, 100, 50)`},{header:"colorsea.hsi",slug:"colorsea-hsi",content:`/**
@param h number 色相 范围[0, 360)
@param s number 饱和度 范围[0, 100]
@param i number 亮度Intensity 范围[0, 100]
@param alpha number alpha 范围[0, 100]
*/
colorsea.hsi(h: number, s: number, i: number, alpha?: number) // 示例
colorsea.hsi(55, 9, 31)
colorsea.hsi(55, 9, 31)`},{header:"colorsea.hwb",slug:"colorsea-hwb",content:`/**
@param h number 色相 范围[0, 360)
@param w number 白度 范围[0, 100]
@param b number 黑度 范围[0, 100]
@param alpha number alpha 范围[0, 100]
*/
colorsea.hwb(h: number, w: number, b: number, alpha?: number) // 示例
colorsea.hwb(200, 30, 47)
colorsea.hwb(200, 30, 47)`},{header:"colorsea.cmyk",slug:"colorsea-cmyk",content:`/**
@param c number 青 范围[0, 100]
@param m number 品红 范围[0, 100]
@param y number 黄 范围[0, 100]
@param k number 黑 范围[0, 100]
@param alpha number alpha 范围[0, 100]
*/
colorsea.cmyk(c: number, m: number, y: number, k: number, alpha?: number) // 示例
colorsea.cmyk(65, 40, 0, 21.57)
colorsea.cmyk(65, 40, 0, 21.57)`},{header:"colorsea.xyz",slug:"colorsea-xyz",content:`/**
@param x number x @param y number y @param z number z @param alpha number alpha 范围[0, 100]
*/
colorsea.xyz(x: number, y: number, z: number, alpha?: number) // 示例
colorsea.xyz(36.44, 21.54, 20.98)
colorsea.xyz(36.44, 21.54, 20.98)`},{header:"colorsea.lab",slug:"colorsea-lab",content:`/**
@param l number 亮度 [0,100]
@param a number 红色到绿色 [127,-128]
@param b number 黄色到蓝色 [127,-128]
@param alpha number alpha 范围[0, 100]
*/
colorsea.lab(l: number, a: number, b: number, alpha?: number) // 示例
colorsea.lab(50.57, 8.77, -46.64)
colorsea.lab(50.57, 8.77, -46.64)`},{header:"colorsea.lch",slug:"colorsea-lch",content:`/**
@param l number 亮度
@param c number 色度
@param h number 色相 [0, 360)
@param alpha number alpha 范围[0, 100]
*/
colorsea.lch(l: number, c: number, h: number, alpha?: number) // 示例
colorsea.lch(50, 120, 20)
colorsea.lch(50, 120, 20)`},{header:"colorsea.random",slug:"colorsea-random",content:`生成随机颜色
colorsea.random()`}]},{path:"/zh/Diff.html",title:"色差 （deltaE）",pathLocale:"/zh/",contents:[{header:"色差 （deltaE）",slug:"色差-deltae",content:`color实例包含一个deltaE方法。可用于查询色差，其支持 CMC(l:c), CIE2000, CIE1994, CIE1976 多种色差公式查询
color.deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting) => number
注：当前颜色实例对象color为标准色，第一个参数sampleColor为样品色
参数说明： @param sampleColor 样品颜色
@param mode 色差模式，即选用哪种公式计算色差，默认值为 CMC, 有以下几种可选： CMC | CIE2000 | CIE1994 | CIE1976
@param setting 不同的色差公式有不同的系数可设置 CMC: { l: number, c: number } 默认值为 { l: 1, c: 1 }
CIE2000: { kL: number; kC: number; kH: number } 默认值为 { kL: 1; kC: 1; kH: 1 }
CIE1994:{ kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' }默认值为 { kL: 1; kC: 1; kH: 1, cate: 'graphic' }, 当 cate为textiles时，kL的值会变为2，无视设置`},{header:"CMC(l:c)色差查询",slug:"cmc-l-c-色差查询",content:`示例
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色 // 使用CMC(1:1)公式
color1.deltaE(color2, 'CMC') // 5.754...
// 参数二默认为'CMC' 故可省略参数二
color1.deltaE(color2) // CMC(2:1)公式, 只需把权重因子l设为2即可 (c默认为1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719... TIP
CMC（l:c）色差公式中，l表示明度加权值，调节明度的相对宽容量；c表示彩度加权值，调节彩度的相对宽容量。行业不同，可以通过调节l或c的值，调整明度和饱和度对总色差的影响程度。 在对色差的感知性进行评价时，推荐采用l:c = 1: 1 ，如涂料、塑料行业。
在对色差的可接受性进行评价时，推荐采用l:c = 2: 1 ，在纺织印染等行业对产品质量进行控制大多推荐采用 l:c = 2: 1`},{header:"CIE2000色差查询",slug:"cie2000色差查询",content:`示例
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色 // 使用CIE2000公式
color1.deltaE(color2, 'CIE2000') // 3.6815... // （效正系数，kL, kC, kH 默认值都为1）
color1.deltaE(color2, 'CIE2000', { kL：1, kC: 1: kH: 1})`},{header:"CIE1994色差查询",slug:"cie1994色差查询",content:`示例
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色 // 使用CIE1994公式
color1.deltaE(color2, 'CIE1994') // 3.3725... // （效正系数，kL, kC, kH 默认值都为1）
color1.deltaE(color2, 'CIE1994', { kL：1, kC: 1: kH: 1}) // 注：cate默认值为 'graphic'，即图像艺术（graphic arts）
// 如果用于进行织物评价，设置cate为'textiles'。
color1.deltaE(color2, 'CIE1994', { cate: 'textiles'}) TIP
当 { cate: 'textiles' } 时，系数 kL将无视自定义设置，自动变为2。`},{header:"CIE1976色差查询",slug:"cie1976色差查询",content:`示例
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色 // 使用CIE1976公式
color1.deltaE(color2, 'CIE1976') // 20.1246...`}]},{path:"/zh/Names.html",title:"使用颜色名称",pathLocale:"/zh/",contents:[{header:"使用颜色名称",slug:"使用颜色名称",content:`你可以通过颜色名称来创建Color实例，但必先通过 colorsea.useName(colorNames)方法来加载颜色名称的映射关系。
现支持x11颜色名、中国传统色、日本传统色
示例1： 基本用法
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// 载入X11颜色名
colorsea.useNames(x11) // 此时你可以直接使用X11颜色名称来创建颜色
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
Aqua: #00ffff - Aquamarine: #7fffd4示例2： 同时加载多种类型颜色名
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
import chinese from 'colorsea/colors/chinese'
// 同时载入x11名称和中国传统色, 可链式操作
colorsea.useNames(x11).useNames(chinese) colorsea('Beige') // color: #F5F5DC
colorsea('山梗紫') // color: #61649f
Beige: #F5F5DC - 山梗紫: #61649f示例3： 为颜色名称添加前缀
加载不同系列的颜色名称时，如果名称关键字有冲突，后加载的会覆盖前加载的。为此，可以统一格式化名称关键字，为关键字添加前缀，免受冲突影响。
colorsea.useNames() 方法的第二个参数可传入一个回调函数，此函数有两个参数key和value，对应颜色名称(key)和颜色值(value)，其必需返回一个包含处理后的[key,value]元组
import colorsea from 'colorsea'
import chineseTr from 'colorsea/colors/chineseTr'
import nippon from 'colorsea/colors/nippon'
// 同时载入中国传统色(繁体), 和日本传统色
colorsea .useNames(chineseTr, (key, value) => [\`zh:\${key}\`, value]) .useNames(nippon, (key, value) => [\`np:\${key}\`, value]) // 调用时需添加前缀
colorsea('zh:潮蓝') // color: #2983bb
colorsea('np:紺青') // color: #113285
潮蓝: #2983bb - 紺青: #113285`},{header:"X11颜色",slug:"x11颜色",content:`在 X Window System 上，颜色名称在一个简单的文本文件中表示，该文件将某些字符串映射到 RGB 颜色值。 它传统上随每个 X11 安装包一起提供，因此得名。
Web 颜色列表源自它，CSS3 已接纳了绝大部分X11颜色。
// 载入
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
colorsea.useNames(x11)
// 使用
colorsea('Aqua') // color: #00ffff
下表来自CSS3规范的web“X11颜色”列表
TIP 更多关于X11颜色的介绍可参考：https://en.wikipedia.org/wiki/X11_color_names 下表颜色名关键字来源于： https://www.w3.org/TR/css-color-3/#svg-color`},{header:"中国传统色",slug:"中国传统色",content:`TIP
中国传统色参考于： http://zhongguose.com/
包含简体中文和繁体中文两个版本，请按需载入 简体中文：'colorsea/colors/chinese'
繁体中文：'colorsea/colors/chineseTr' // 载入
import colorsea from 'colorsea'
import chinese from 'colorsea/colors/chinese'
// 繁体中文版本请加载 'colorsea/colors/chineseTr'
// import chineseTr from 'colorsea/colors/chineseTr'
colorsea.useNames(chinese)
// 使用
colorsea('山梗紫') // color: #61649f`},{header:"日本传统色 (Nippon colors)",slug:"日本传统色-nippon-colors",content:`TIP
日本传统色参考于： https://nipponcolors.com/
包含汉字和罗马字两个版本，请按需载入 汉字：'colorsea/colors/nippon'
罗马字：'colorsea/colors/nipponRm' // 载入
import colorsea from 'colorsea'
import nippon from 'colorsea/colors/nippon'
// 罗马字版本请加载 'colorsea/colors/nipponRm'
// import nipponRm from 'colorsea/colors/nipponRm'
colorsea.useNames(nippon)
// 使用
colorsea('桑染') // color: #64363C`},{header:"自定义颜色名",slug:"自定义颜色名",content:`除了使用以上预设的颜色名外，你也可以自定义颜色名称，具体可参考以下示例
import colorsea from 'colorsea' // 定义一个对象，以\`key: value\`的形式存放\`颜色名: 颜色值\`的关系。
const myColorNames = { supperred: '#ff3333', almond: '#f7e8aa', milky: '#f9f4dc'
} // 加载刚才自定义的颜色名
colorsea.useNames(myColorName) // 使用
colorsea('milky') // color #f9f4dc 注意
自定义颜色名时，其所有颜色名称的key都必需为小写。使用时，不区分大小写`}]},{path:"/zh/QuickStart.html",title:"快速上手",pathLocale:"/zh/",contents:[{header:"快速上手",slug:"快速上手",content:""},{header:"安装",slug:"安装",content:"pnpm install colorsea yarn add colorsea npm install colorsea"},{header:"导入和使用",slug:"导入和使用",content:""},{header:"导入",slug:"导入",content:`import colorsea from 'colorsea' const colorsea = require('colorsea') <script src="path/to/colorsea.js"><\/script>`},{header:"颜色空间转换",slug:"颜色空间转换",content:`// ----- color conversion
colorsea('#ff0000').rgb() // [255, 0, 0]
colorsea('#ff0000', 50).rgba() // [255, 0, 0, 50]
// colorsea() 函数可以创建一个Color实例
const color = colorsea('#405060')
color.rgba() // [255, 0, 0, 50]
color.xyz() // [7.09, 7.67, 12.17]
color.lab() // [33.29, -1.94, -11.36] // Convert from other color spaces
colorsea.xyz(7.09, 7.67, 12.17).rgb() // [64, 80, 96]
colorsea.hsl(210, 20, 31.37).rgb() // [64, 80, 96]
// ... Other color spaces are similar`},{header:"颜色操作",slug:"颜色操作",content:`// ---- Color operations
const color = colorsea('#ffffff')
const newColor = color.darken(10) // All operations will return a new Color instance object
newColor.hex() // #e6e6e6
colorsea('#000').lighten(10).hex() // #1a1a1a
colorsea('#ff0000').spin(180).hex() // #00ffff
colorsea.hsl(80, 90, 20).saturate(10).hsl() // [80, 100, 20]
colorsea.hsl(80, 90, 20).desaturate(10).hsl() // [80, 80, 20]
colorsea('#776600').fadeOut(10).rgba() // [119, 102, 0, 90] const color1 = new Color('#ff0000')
const color2 = new Color('#0000ff')
const color = color1.mix(color2, 20)
color.hex() // #cc0033`},{header:"色差计算",slug:"色差计算",content:`const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色 // 使用CMC(1:1)公式
color1.deltaE(color2, 'CMC') // 5.754...
// 参数二默认为'CMC' 故可省略参数二
color1.deltaE(color2) // CMC(2:1)公式, 只需把权重因子l设为2即可 (c默认为1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719... // 使用CIE2000公式
color1.deltaE(color2, 'CIE2000') // 3.6815... // 使用CIE1994公式
color1.deltaE(color2, 'CIE1994') // 3.3725... // 使用CIE1976公式
color1.deltaE(color2, 'CIE1976') // 20.1246...`},{header:"使用颜色名称",slug:"使用颜色名称",content:`import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// 载入X11颜色名
colorsea.useNames(x11) // 此时你可以直接使用X11颜色名称来创建颜色
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
import chinese from 'colorsea/colors/chinese' //中国传统色
import nippon from 'colorsea/colors/nippon' //日本传统色
// 同时载入两者
colorsea.useNames(chinese).useNames(nippon) // 使用
colorsea('山梗紫') // color: #61649F
colorsea('水がき') // color: #B9887D`}]},{path:"/zh/",title:"colorsea.js",pathLocale:"/zh/",contents:[]},{path:"/zh/Value.html",title:"颜色取值和改值",pathLocale:"/zh/",contents:[{header:"颜色取值和改值",slug:"颜色取值和改值",content:""},{header:"color.red()",slug:"color-red",content:`color.red() => number
color.red(amount: number) => Color 参数 amount?: number 当不传入amount时，取得rgb的红色通道的值，范围为[0, 255]
当传入amount时，为修改红色通度的值，并返回一个新的Color实例 例1：取得红色通道值
colorsea('#ffcc22').red() // 255
例2：设置红色通道为200
colorsea('#ffcc22').red(200) // Color #c8cc22
#ffcc22 -> #c8cc22`},{header:"color.green()",slug:"color-green",content:`color.green() => number
color.green(amount: number) => Color 参数 amount?: number 当不传入amount时，取得rgb的绿色通道的值，范围为[0, 255]
当传入amount时，为修改绿色通度的值，并返回一个新的Color实例 例1：取得绿色通道值
colorsea('#ffcc22').green() // 204
例2：设置绿色通道为100
colorsea('#ffcc22').green(100) // Color #ff6422
#ffcc22 -> #ff6422`},{header:"color.blue()",slug:"color-blue",content:`color.blue() => number
color.blue(amount: number) => Color 参数 amount?: number 当不传入amount时，取得rgb的蓝色通道的，值范围为[0, 255]
当传入amount时，为修改蓝色通度的值，并返回一个新的Color实例 例1：取得蓝色通道值
colorsea('#ffcc22').blue() // 34
例2：设置蓝色通道为255
colorsea('#ffcc22').blue(255) // Color #ffccff
#ffcc22 -> #ffccff`},{header:"color.hue()",slug:"color-hue",content:`color.hue() => number
color.hue(amount: number) => Color 参数 amount?: number 当不传入amount时，取得色相值，范围为[0, 360)
当传入amount时，为修改色相值，并返回一个新的Color实例 例1：取得色相
colorsea('#ffcc22').hue() // 46
例2：设置色相为120°
colorsea('#ffcc22').hue(120) // Color #24ff24
#ffcc22 -> #24ff24`},{header:"color.saturation()",slug:"color-saturation",content:`color.saturation() => number
color.saturation(amount: number) => Color 参数 amount?: number 当不传入amount时，取得饱和度值，范围为[0, 100]
当传入amount时，为修改饱和度，并返回一个新的Color实例 例1：取得饱和度
colorsea('#ffcc22').saturation() // 100
例2：设置饱和度为20%
colorsea('#ffcc22').saturation(20) // Color #a79d7b
#ffcc22 -> #a79d7b`},{header:"color.lightness()",slug:"color-lightness",content:`color.lightness() => number
color.lightness(amount: number) => Color 参数 amount?: number 当不传入amount时，取得光亮度，范围为[0, 100]
当传入amount时，为修改光亮度，并返回一个新的Color实例 例1：取得光亮度
colorsea('#ffcc22').lightness() // 57
例2：设置光亮度为30%
colorsea('#ffcc22').lightness(30) // Color #664e00
#ffcc22 -> #664e00`},{header:"color.alpha()",slug:"color-alpha",content:`color.alpha() => number
color.alpha(amount: number) => Color 参数 amount?: number 当不传入amount时，取得alpha通道的值，范围为[0, 100]
当传入amount时，为修改alpha通道的值，并返回一个新的Color实例 例1：取得不透明度
colorsea('#22994a', 90).alpha() // 90
例2：设置不透明度为30%
colorsea('#22994a', 90).alpha(30) // Color #22994a33
#22994a -> #22994a33`},{header:"color.luma()",slug:"color-luma",content:`取得感知亮度
color.luma() => number
例
colorsea('#22994a').luma() // 0.23616959154733871`},{header:"color.brightness()",slug:"color-brightness",content:`取得明度Brightness
range: [0, 100]
color.brightness() => number
例:
colorsea('#FFFFFF').brightness() // 100`},{header:"color.visibility()",slug:"color-visibility",content:`检查一个颜色在另一个颜色上是否易于可见,
如果返回false, 则为可见性比较差。 refer to: https://www.w3.org/TR/AERT/#color-contrast /** * @param anotherColor 另一个用于对比的颜色 * @param setting 用于判定可见性好坏的阈值设置,{b, c}. * * b: brightness差值, 默认值为125, 小于或等于此值说明可见性差。颜色brightness值的范围取[0,255] * * c: rgb差值, 默认值为500，小于或等于此值说明可见性差 */ color.visibility( anotherColor: Color | string | CommonColoraTuple | CommonColorTuple, setting?: { b: number; c: number } ) => boolean
例:
colorsea('red').visibility(colorsea('#ee6666')) // false
colorsea('#ffff00').visibility('#000000') // true
#ff0000, #ee6666, return false, #ffff00, #000000, return true
TIP
color.red(),color.green(),color.blue(),color.hue(),color.saturation(),color.lightness(), color.alpha(),color.luma()等方法的取值，如果其计算结果为小数，将会返会所有小数位数，并不会将结果进行取整或截取多少位小数。`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],q="update-vuepress-plugin-full-text-search2-search-index";var k=g(W),D=w(()=>{const e=new Map;for(const o of k.value)e.set(o.path,o);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[q]=e=>{k.value=e});function O(e){const o=g([]);let t=null;return M(e,()=>{t&&clearTimeout(t),t=setTimeout(a,100)}),o;function a(){const i=e.value.toLowerCase().trim();if(!i){o.value=[];return}const l=new Map,r=new Set;for(const n of k.value)for(const c of G(n,i)){r.add(c.parentPageTitle);let s=l.get(c.parentPageTitle);s||(s=[],l.set(c.parentPageTitle,s)),s.push(c)}const u=[...r].sort((n,c)=>{const s=l.get(n);return l.get(c).length-s.length});o.value=[...l].flatMap(([,n])=>n).sort((n,c)=>n.parentPagePriority-c.parentPagePriority||u.indexOf(n.parentPageTitle)-u.indexOf(c.parentPageTitle)||n.priority-c.priority)}}function*G(e,o){const t=E(e.title,o);if(t){yield{path:e.path,parentPageTitle:x(e),title:e.title,display:t,page:e,content:null,parentPagePriority:1,priority:1};return}for(const a of e.contents){const i=E(a.header,o);if(i){yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:x(e),title:e.title,display:i,page:e,content:null,parentPagePriority:10,priority:2};continue}const l=E(a.content,o);l&&(yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:x(e),title:e.title,display:[{type:"header",str:`${a.header}
`},...l],page:e,content:null,parentPagePriority:10,priority:10})}}function x(e){const o=e.path.split("/");let t="/";return o[1]&&(t=`/${o[1]}/`),(D.value.get(t)||e).title}function E(e,o){const t=[];let a=0;const i=e.toLowerCase().replace(/\s/gu," ");let l=0,r=i.indexOf(o,l);if(r<0)return null;for(;r>=0;){const n=r+o.length;if(u(e.slice(l,r),"normal"),u(e.slice(r,n),"highlight"),l=n,r=i.indexOf(o,l),a>100)break}return u(e.slice(l),"normal"),t.filter(n=>n.str);function u(n,c){let s=n;c==="normal"&&s.length>100&&a===0&&(s=`… ${s.slice(-10)}`);let f=!1;if(a+s.length>100){if(t.some(d=>d.type==="ellipsis"))return;s=s.slice(0,Math.max(100-a,1)),f=!0}t.push({type:c,str:s}),a+=s.length,f&&(t.push({type:"ellipsis",str:" …"}),a+=2)}}const U={},Y=A({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>U}},setup(e){const{locales:o}=N(e),t=g(""),a=g(!1),i=g(-1),l=O(t),r=w(()=>t.value&&a.value&&l.value.length),u=P(),n=F(),c=w(()=>o.value[n.value]??{});function s(){if(!r.value)return;let m=i.value-1;m<0&&(m=l.value.length-1),d(m)}function f(){if(!r.value)return;let m=i.value+1;m>=l.value.length&&(m=0),d(m)}function d(m){i.value=m}function z(){i.value=-1}function R(m){if(!r.value)return;const I=l.value[m];I&&u.push(I.path)}return{query:t,focused:a,focusIndex:i,suggestions:l,activeSuggestion:r,onUp:s,onDown:f,focus:d,unfocus:z,go:R,locale:c}}});const $={class:"search-box",role:"search"},_=["placeholder"],V=["onMousedown","onMouseenter"],J=["href"],Q={key:0,class:"parent-page-title"},K={class:"suggestion-row"},Z={class:"page-title"},ee={class:"suggestion-content"};function oe(e,o,t,a,i,l){return h(),p("div",$,[H(b("input",{ref:"input","onUpdate:modelValue":o[0]||(o[0]=r=>e.query=r),"aria-label":"Search",class:C({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:o[1]||(o[1]=()=>e.focused=!0),onBlur:o[2]||(o[2]=()=>e.focused=!1),onKeyup:[o[3]||(o[3]=v(r=>e.go(e.focusIndex),["enter"])),o[4]||(o[4]=v((...r)=>e.onUp&&e.onUp(...r),["up"])),o[5]||(o[5]=v((...r)=>e.onDown&&e.onDown(...r),["down"]))]},null,42,_),[[j,e.query]]),e.activeSuggestion?(h(),p("ul",{key:0,class:"suggestions",onMouseleave:o[7]||(o[7]=(...r)=>e.unfocus&&e.unfocus(...r))},[(h(!0),p(T,null,S(e.suggestions,(r,u)=>(h(),p("li",{key:u,class:C(["suggestion",{focused:u===e.focusIndex}]),onMousedown:n=>e.go(u),onMouseenter:n=>e.focus(u)},[b("a",{href:r.path,onClick:o[6]||(o[6]=X(()=>{},["prevent"]))},[r.parentPageTitle&&(!e.suggestions[u-1]||e.suggestions[u-1].parentPageTitle!==r.parentPageTitle)?(h(),p("div",Q,y(r.parentPageTitle),1)):L("v-if",!0),b("div",K,[b("div",Z,y(r.title||r.path),1),b("div",ee,[(h(!0),p(T,null,S(r.display,(n,c)=>(h(),p("span",{key:c,class:C(n.type)},y(n.str),3))),128))])])],8,J)],42,V))),128))],32)):L("v-if",!0)])}const ae=B(Y,[["render",oe],["__scopeId","data-v-c13c90dc"],["__file","SearchBox.vue"]]);export{ae as default};

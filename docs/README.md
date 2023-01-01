---
sidebar: auto
---

# ColorSea

## 1. About

This is a color tool library written in Typescript. You can use it to convert color spaces (`RGB`, `HSL`, `HSV`, `HSI`, `HWB`, `XYZ`, `LAB`, `LCH`, `xyY`), or to convert colors like `LESS`/`SASS` Operation (`darken`/`lighten`, `saturate`/`desaturate`, `spin`, `mix`). Support `CMC(l:c)`, `CIE2000`, `CIE1994`, `CIE1976` color difference queries.

## 2. Quick Start

```sh
# installation
npm install colorsea 
```

```typescript
import colorsea from 'colorsea'

// ----- color conversion
colorsea('#ff0000').rgb() // [255, 0, 0]
colorsea('#ff0000', 50).rgba() // [255, 0, 0, 50]
const color = colorsea('#405060')
color.rgba() // [255, 0, 0, 50]
color.xyz() // [7.09, 7.67, 12.17]
color.lab() // [33.29, -1.94, -11.36] 
// Convert from other color spaces
colorsea.xyz(7.09, 7.67, 12.17).rgb() // [64, 80, 96]
colorsea.hsl(210, 20, 31.37).rgb() // [64, 80, 96]
// ... Other color spaces are similar

// ---- Color operations
const color = colorsea('#ffffff')
const newColor = color.darken(10) // All operations will return a new Color instance object
newColor.hex() // #e6e6e6
colorsea('#000').lighten(10).hex() // #1a1a1a
colorsea('#ff0000').spin(180).hex() // #00ffff
colorsea.hsl(80, 90, 20).saturate(10).hsl() // [80, 100, 20]
colorsea.hsl(80, 90, 20).desaturate(10).hsl() // [80, 80, 20]
colorsea('#776600').fadeOut(10).rgba() // [119, 102, 0, 90]

const color1 = new Color('#ff0000')
const color2 = new Color('#0000ff')
const color = color1.mix(color2, 20)
color.hex() // #cc0033

```

## 3. Get a Color instance object

### colorsea()

Create a color instance object using the `colorsea(rgb, alpha)` function.

```typescript
/**
The colorsea function takes two arguments:
@param rgb string | [number, number, number] 
 (Required) A hexadecimal rgb value, or an [r, g, b] tuple
@param alpha number 
 (Optional) Opacity in the range of [0, 100]. The default value is 100, which is 100%
 */

// You can pass in a HEX string
colorsea('#cc0020', 90)
// or [R, G, B]
colorsea([204, 0, 32], 90)
```

<ColorBox box-color="rgba(204, 0, 32, 90%)">colorsea('#cc0020', 90)</ColorBox>

---

::: tip
In addition to creating Color instance objects through the colorsea function, you can also create Color instances through other color space methods
:::

```typescript
const { rgb, hsl, hsv, hsi, hwb, xyz, lab, lch } = colorsea
/**
* All of the above color space methods accept four parameters,
* The first three parameters are mandatory and are the color setting values of the color space.
* The fourth parameter is the alpha channel, which is not required. The default value is 100, which is 100% opaque.
*/ 
const color = rgb(255, 0, 0)
const color2 = hsl(0, 100, 50)
// ...
```

---

### colorsea.rgb

`colorsea.rgb(r, g, b, alpha)` is equal to  `colorsea(rgb, alpha)`

```typescript
/**
@param r number Red, Range [0, 255]
@param g number Green, Range [0, 255]
@param b number Blue, Range [0, 255]
@param alpha number alpha, range [0, 100]
*/
colorsea.rgb(r: number, g: number, b: number, alpha?: number)

// Example
colorsea.rgb(100, 20, 92)
```

<ColorBox box-color="rgb(100, 20, 92)">colorsea.rgb(100, 20, 92)</ColorBox>

---

### colorsea.hsl

```typescript
/**
@param h number hue    range[0, 360)
@param s number saturation  range[0, 100]
@param l number lightness    range[0, 100]
@param alpha number alpha  range[0, 100]
*/
colorsea.hsl(h: number, s: number, l: number, alpha?: number)

// Example
colorsea.hsl(180, 90, 32)
```

<ColorBox box-color="hsl(180, 90%, 32%)">colorsea.hsl(180, 90, 32)</ColorBox>

---

### colorsea.hsv

```typescript
/**
@param h number hue                 range[0, 360)
@param s number saturation          range[0, 100]
@param v number brightness value    range[0, 100]
@param alpha number alpha           range[0, 100]
*/
colorsea.hsv(h: number, s: number, v: number, alpha?: number)

// Example
colorsea.hsv(100, 100, 50)
```

<ColorBox box-color="#2a8000">colorsea.hsv(100, 100, 50)</ColorBox>

---

### colorsea.hsi

```typescript
/**
@param h number hue    range[0, 360)
@param s number 饱和度  range[0, 100]
@param i number 亮度Intensity    range[0, 100]
@param alpha number alpha  range[0, 100]
*/
colorsea.hsi(h: number, s: number, i: number, alpha?: number)

// Example
colorsea.hsi(55, 9, 31)
```

<ColorBox box-color="rgb(83, 82, 72)">colorsea.hsi(55, 9, 31)</ColorBox>

---

### colorsea.hwb

```typescript
/**
@param h number hue    range[0, 360)
@param w number whiteness  range[0, 100]
@param b number blackness   range[0, 100]
@param alpha number alpha  range[0, 100]
*/
colorsea.hwb(h: number, w: number, b: number, alpha?: number)

// Example
colorsea.hwb(200, 30, 47)
```

<ColorBox box-color="#4d7487">colorsea.hwb(200, 30, 47)</ColorBox>

---

### colorsea.cmyk

```typescript
/**
@param c number Cyan    range[0, 100]
@param m number Magenta      range[0, 100]
@param y number Yellow      range[0, 100]
@param k number black     range[0, 100]
@param alpha number alpha  range[0, 100]
*/
colorsea.cmyk(c: number, m: number, y: number, k: number, alpha?: number)

// Example
colorsea.cmyk(65, 40, 0, 21.57)
```

<ColorBox box-color="rgb(70, 120, 200)">colorsea.cmyk(65, 40, 0, 21.57)</ColorBox>

---

### colorsea.xyz

```typescript
/**
@param x number x   
@param y number y  
@param z number z  
@param alpha number alpha  range[0~100]
*/
colorsea.xyz(x: number, y: number, z: number, alpha?: number)

// Example
colorsea.xyz(36.44, 21.54, 20.98)
```

<ColorBox box-color="#e0457b">colorsea.xyz(36.44, 21.54, 20.98)</ColorBox>

### colorsea.lab

```typescript
/**
@param l number L* [0,100]
@param a number a* Red to green [127,-128]
@param b number b* Yellow to blue [127,-128]
@param alpha number alpha  range[0, 100]
*/
colorsea.lab(l: number, a: number, b: number, alpha?: number)

// Example
colorsea.lab(50.57, 8.77, -46.64)
```

<ColorBox box-color="#4678C8">colorsea.lab(50.57, 8.77, -46.64)</ColorBox>

---

### colorsea.lch

```typescript
/**
@param l number lightness
@param c number chroma
@param h number hue [0, 360)
@param alpha number alpha  range[0~100]
*/
colorsea.lch(l: number, c: number, h: number, alpha?: number)

// Example
colorsea.lch(50, 120, 20)
```

<ColorBox box-color="#ff003b">colorsea.lch(50, 120, 20)</ColorBox>

---

## 4. Color space converting

After the **color instance** is created, the corresponding color space value can be obtained by the following methods of the color instance, so that the color space conversion can be easily carried out.

:::tip
Methods include: `rgb()` `cmyk()` `hsl()` `hsv()` `hsi()` `hwb()` `xyz()` `lab()` `lch()` `xyY()`
The method has a parameter ` round `, its type is ` Boolean | number `
<br>The default value is `true`

- When `true`, the number of decimal places is left as default.
- When `false`, all calculated decimal places are returned.
- When `number`, specifies how many decimal places to reserve.
:::

**Example：**

```typescript
// hsl to rgb
const color = colorsea.hsl(0, 100, 50)
color.rgb() // [255, 0, 0]
// to lab
color.lab() // [53.24, 80.09, 67.2]
// Do not deal with decimals
color.lab(false) // [ 53.24079414130722, 80.09245959641109, 67.20319651585301 ]

// The other color space methods are similar...
```

### color.rgb()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[r, g, b]`

### color.rgba()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[r, g, b, alpha]`

### color.cmyk()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[c, m, y, k]`

### color.hsl()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, l]`

### color.hsla()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, l, alpha]`

### color.hsv()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, v]`

### color.hsi()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, i]`

### color.hwb()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, w, b]`

### color.xyz()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[x, y, z]`

### color.lab()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[l, a, b]`

### color.lch()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[l, c, h]`

### color.xyY()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[x, y, Y]`

### color.hex()

- **@param** alphaFlag: 0 | 1 | 2
  - 0: do not display alpha value,
  - 1: display alpha value,
  - 2: (default value) only show alpha when alpha is not equal to 100%

- **@return** 返回RGB十六进制字符串

## 5. Color operation

### Example

Example1：Darken the color by 20%

```typescript
colorsea('#ff0000').darken(20) // #cc0000
```

<ColorBox box-color="#ff0000">#ff0000</ColorBox> -> <ColorBox box-color="#990000">#990000</ColorBox>

Example2：

You can perform continuous operations: **Rotate hue 180 degrees** -> **Example1：Darken 30%** -> **Reduce saturation 10%**

```typescript
colorsea('#ff0000').spin(180).darken(30).desaturate(10) // Color: #0ac2c2
```

<ColorBox box-color="#ff0000">#ff0000</ColorBox> -> <ColorBox box-color="#056161">#056161</ColorBox>

:::tip
Each operation will return a new Color instance object
:::

### color.lighten()

Increase lightness

```typescript
/**
  * Increase lightness
  * @param amount Brightness increase percentage, the default is 5, which means 5%
  * @param method If you fill in 'relative', it means that the parameter amount is a relative value
  * @returns Color
  */
color.lighten(amount: number = 5, method?: string) => Color
```

Example: Increase lightness by 10%

```typescript
colorsea('#338800').lighten(10) // Color: #46bb00
```

<ColorBox box-color="#338800">#338800</ColorBox> -> <ColorBox box-color="#46bb00">#46bb00</ColorBox>

### color.darken()

Reduce lightness

```typescript
 /**
   * Reduce lightness
   * @param amount The percentage of lightness reduction, the default is 5, which means 5%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns Color
   */
color.darken(amount: number = 5, method?: string) => Color
```

Example: Reduce lightness by 10%

```typescript
colorsea('#338800').darken(10) // Color: #205500
```

<ColorBox box-color="#338800">#338800</ColorBox> -> <ColorBox box-color="#205500">#205500</ColorBox>

### color.saturate()

Increase saturation

```typescript
 /**
   * Increase saturation
   * @param amount How much to increase the saturation, the default is 5, which means 5%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns new Color
   */
color.saturate(amount: number = 5, method?: string) => Color
```

Example: 增加饱和度30%

```typescript
colorsea('#E5B7A1').saturate(30) // Color: #f7b18f
```

<ColorBox box-color="#E5B7A1">#E5B7A1</ColorBox> -> <ColorBox box-color="#f7b18f">#f7b18f</ColorBox>

### color.desaturate()

Reduce saturation

```typescript
 /**
   * Reduce saturation
   * @param amount The percentage of saturation reduction, the default is 5, which means 5%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns new Color
   */
color.desaturate(amount: number = 5, method?: string) => Color
```

Example: Reduce saturation by 50%

```typescript
colorsea('#00ff00').desaturate(50) // Color: #40bf40
```

<ColorBox box-color="#00ff00">#00ff00</ColorBox> -> <ColorBox box-color="#40bf40">#40bf40</ColorBox>

### color.spin()

Rotate hue

```typescript
/**
  * Rotate hue
  * @param angle rotation angle
  */
color.spin(angle: number) => Color
```

Example: Rotate hue 90 degrees clockwise

```typescript
colorsea('#00ff00').spin(90) // Color: #007fff
```

<ColorBox box-color="#00ff00">#00ff00</ColorBox> -> <ColorBox box-color="#007fff">#007fff</ColorBox>

### color.adjustHue()

`color.adjustHue` is an alias of `color.spin`, the usage is consistent with color.spin

### color.complement()

Get the complementary color, equivalent to `color.spin(180)`

Example:

```typescript
colorsea('#00ff00').complement() // Color: #0f00ff
```

<ColorBox box-color="#f0ff00" text-color="#000000">#00ff00</ColorBox> -> <ColorBox box-color="#0f00ff">#0f00ff</ColorBox>

### color.invert()

reverse color

Example:

```typescript
colorsea('#ff3366').invert() // Color: #00cc99
```

<ColorBox box-color="#ff3366">#ff3366</ColorBox> -> <ColorBox box-color="#00cc99">#00cc99</ColorBox>

```typescript
colorsea('#cccccc').invert() // Color: #333333
```

<ColorBox box-color="#cccccc" text-color="#000000">#cccccc</ColorBox> -> <ColorBox box-color="#333333">#333333</ColorBox>

### color.mix()

color mixing

```typescript
/**
  * mix color
  * @param color Another color, which can be a Color instance, a hexadecimal color string, or an [r, g, b] color tuple
  * @param weight The mixing ratio of another color, the default value is 50 or 50%
  * @returns Color
  */
color.mix(color: Color, weight: number = 50) => Color
```

Example 1: rgb(30, 177, 250) mixed with 60% hsl(0, 100%, 20%)

```typescript
colorsea([30, 177, 250]).mix(colorsea.hsl(0, 100, 20), 60) // Color #494764
```

<ColorBox box-color="rgb(30, 177, 250)">rgb(30, 177, 250)</ColorBox> .mix(<ColorBox box-color="hsl(0 100% 20%)">hsl(0 100% 20%)</ColorBox>, 60) == <ColorBox box-color="rgb(73, 71, 100)">rgb(73, 71, 100)</ColorBox>

Example 2: Mix of #CE9FFC and #EA5455, 50% each

```typescript
const color1 = colorsea('#CE9FFC')
const color2 = colorsea('#EA5455')
color1.mix(color2) // Color #dc7aa9
// or color2 can not create a Color instance, directly use the hex string
color1.mix('#EA5455') // Color #dc7aa9
// or color2 is passed directly to the [r, g, b] tuple
color1.mix([234, 84, 85]) // Color #dc7aa9
```

<ColorBox box-color="#CE9FFC">#CE9FFC</ColorBox> .mix(<ColorBox box-color="#EA5455">#EA5455</ColorBox>, 50) == <ColorBox box-color="#dc7aa9">#dc7aa9</ColorBox>

Example 3: Continuous Mixing

```typescript
colorsea('#0396FF').mix('#7367F0', 33).mix('#EA5455', 50) // #896da8
```

<ColorBox box-color="#0396FF">#0396FF</ColorBox> .mix(<ColorBox box-color="#7367F0">#7367F0</ColorBox>, 33).mix(<ColorBox box-color="#EA5455">#EA5455</ColorBox>, 50) == <ColorBox box-color="#896da8">#896da8</ColorBox>

### color.fadeIn()

Increase opacity

```typescript
 /**
   * Increase opacity
   * @param amount The value of opacity increase, the default is 10, which means 10%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns new Color
   */
color.fadeIn(amount: number = 10, method?: string) => Color
```

Example: 

```typescript
colorsea('#ff0000', 10).fadeIn(30) // #ff000066
```

<ColorBox box-color="#ff00001a">#ff00001a</ColorBox> -> <ColorBox box-color="#ff000066">#ff000066</ColorBox>

### color.fadeOut()

Reduce opacity

```typescript
 /**
   * Reduce opacity
   * @param amount The value of opacity reduction, the default is 10, which means 10%
   * @param method If you fill in 'relative', it means that the parameter amount is a relative value
   * @returns new Color
   */
color.fadeOut(amount: number = 10, method?: string) => Color
```

Example: 

```typescript
colorsea('#ff0000', 100).fadeOut(50) // #ff000080
```

<ColorBox box-color="#ff0000">#ff0000</ColorBox> -> <ColorBox box-color="#ff000080">#ff000080</ColorBox>

### color.opacify()

`color.opacify` is an alias of `color.fadeIn`, the usage is consistent with `color.fadeIn`

### color.transparentize()

`color.transparentize` is an alias of `color.fadeOut`, the usage is consistent with `color.fadeOut`

## 6. Color value and change value

### color.red()

```typescript
color.red() => number
color.red(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, get the value of the red channel of rgb, and the value range is [0, 255]
  - When the amount is passed in, modify the value of the red channel and return a new Color instance

Example 1: Get the red channel value

```typescript
colorsea('#ffcc22').red() // 255
```

Example 2: Set the red channel to 200

```typescript
colorsea('#ffcc22').red(200) // Color #c8cc22
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#c8cc22">#c8cc22</ColorBox>

### color.green()

```typescript
color.green() => number
color.green(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, get the value of the green channel of rgb, and the value range is [0, 255]
  - When the amount is passed in, modify the value of the green channel and return a new Color instance

Example 1: Get the green channel value

```typescript
colorsea('#ffcc22').green() // 204
```

Example 2: Set the green channel to 100

```typescript
colorsea('#ffcc22').green(100) // Color #ff6422
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#ff6422">#ff6422</ColorBox>

### color.blue()

```typescript
color.blue() => number
color.blue(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, get the value of the blue channel of rgb, and the value range is [0, 255]
  - When the amount is passed in, it modifies the value of the blue channel and returns a new Color instance

Example 1: Get the blue channel value

```typescript
colorsea('#ffcc22').blue() // 34
```

Example 2: Set the blue channel to 255

```typescript
colorsea('#ffcc22').blue(255) // Color #ffccff
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#ffccff">#ffccff</ColorBox>

### color.hue()

```typescript
color.hue() => number
color.hue(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, the hue value is obtained, and the range is [0, 360)
  - When the amount is passed in, the hue value is modified and a new Color instance is returned

Example 1: get hue

```typescript
colorsea('#ffcc22').hue() // 46
```

Example 2: Set hue to 120°

```typescript
colorsea('#ffcc22').hue(120) // Color #24ff24
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#24ff24">#24ff24</ColorBox>

### color.saturation()

```typescript
color.saturation() => number
color.saturation(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, get the saturation value, the range is [0, 100]
  - When the amount is passed in, the saturation is modified and a new Color instance is returned

Example 1: Get Saturation

```typescript
colorsea('#ffcc22').saturation() // 100
```

Example 2: Set saturation to 20%

```typescript
colorsea('#ffcc22').saturation(20) // Color #a79d7b
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#a79d7b">#a79d7b</ColorBox>

### color.lightness()

```typescript
color.lightness() => number
color.lightness(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, get the lightness, the range is [0, 100]
  - When the amount is passed in, it is used to modify the lightness and return a new Color instance

Example 1: Get lightness

```typescript
colorsea('#ffcc22').lightness() // 57
```

Example 2: Set lightness to 30%
s
```typescript
colorsea('#ffcc22').lightness(30) // Color #664e00
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#664e00">#664e00</ColorBox>

### color.alpha()

```typescript
color.alpha() => number
color.alpha(amount: number) => Color
```

- parameter amount?: number
  - When the amount is not passed in, the value of the alpha channel is obtained, and the range is [0, 100]
  - When the amount is passed in, modify the value of the alpha channel and return a new Color instance

Example 1: Get Opacity

```typescript
colorsea('#22994a', 90).alpha() // 90
```

Example 2: Set the opacity to 30%

```typescript
colorsea('#22994a', 90).alpha(30) // Color #22994a33
```

<ColorBox box-color="#22994a">#22994a</ColorBox> -> <ColorBox box-color="#22994a33">#22994a33</ColorBox>

### color.luma()

get luma

```typescript
color.luma() => number
```

Example:

```typescript
colorsea('#22994a').luma() // 0.23616959154733871
```

:::tip
For methods such as `color.red()`,`color.green()`,`color.blue()`,`color.hue()`,`color.saturation()`,`color.lightness()`, `color.alpha()`,`color.luma()`, if the calculation result is a decimal, all decimal places will be returned, and the result will not be rounded or how many decimal places will be truncated.
:::

## 7. color difference （deltaE）

cThe color instance contains a deltaE method. Can be used to query color difference, it supports `CMC`, `CIE2000`, `CIE1994`, `CIE1976` color difference formula query

```typescript
color.deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting) => number
```

Note: The current color instance object `color` is **standard color**, the first parameter `sampleColor` is **sample color**

Parameter Description:

- @param **sampleColor** sample color
- @param **mode** Color difference mode, which formula to use to calculate color difference, the default value is `CMC`, there are the following options: `CMC` | `CIE2000` | `CIE1994` | `CIE1976`
- @param **setting** Different color difference formulas have different coefficients that can be set
  - **CMC**: `{ l: number, c: number }` The default value is `{ l: 1, c: 1 }`
  - **CIE2000**: `{ kL: number; kC: number; kH: number }` The default value is `{ kL: 1; kC: 1; kH: 1 }`
  - **CIE1994**:` { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' } ` The default value is `{ kL: 1; kC: 1; kH: 1, cate: 'graphic' }`, When cate is `textiles`, the value of kL will become 2, regardless of the setting

### CMC(l:c)

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Use the CMC(1:1) formula
color1.deltaE(color2, 'CMC') // 5.754...
// The second parameter defaults to 'CMC', so the second parameter can be omitted
color1.deltaE(color2)

// CMC(2:1) formula, just set 'l' to 2 ('c' defaults to 1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719...

```

:::tip
In the CMC (l:c) color difference formula, `l` represents the weighted value of lightness, which adjusts the relative width of lightness; `c` represents the weighted value of chroma, which adjusts the relative width of chroma. Depending on the industry, you can adjust the influence of lightness and saturation on the total color difference by adjusting the value of `l` or `c`.

- When evaluating the perception of color difference, it is recommended to use `l:c = 1:1`, such as paint, plastic industry.
- When evaluating the acceptability of color difference, it is recommended to use `l:c = 2: 1`, and it is recommended to use `l:c = 2: 1` to control product quality in textile printing and dyeing industries
:::

### CIE2000

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Using the CIE2000 formula
color1.deltaE(color2, 'CIE2000') // 3.6815...

// Efficacy coefficient, kL, kC, kH default value is 1
color1.deltaE(color2, 'CIE2000', { kL：1, kC: 1: kH: 1})
```

### CIE1994

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Using the CIE1994 formula
color1.deltaE(color2, 'CIE1994') // 3.3725...

// Effect coefficient, kL, kC, kH default value is 1
color1.deltaE(color2, 'CIE1994', { kL：1, kC: 1: kH: 1})

// Note: The default value of cate is 'graphic', that is, graphic arts
// If used for fabric evaluation, set cate to 'textiles'.
color1.deltaE(color2, 'CIE1994', { cate: 'textiles'})

```

:::tip
When `{ cate: 'textiles' }`, the coefficient `kL` will ignore the custom setting and automatically become 2.
:::

### CIE1976

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Using the CIE1976 formula
color1.deltaE(color2, 'CIE1976') // 20.1246...

```

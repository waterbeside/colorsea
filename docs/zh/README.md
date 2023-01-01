---
sidebar: auto
---

# ColorSea

## 一. 关于

这是一个使用Typescript编写的颜色工具库; 你可以使用此进行颜色空间的转换(`RGB`, `HSL`, `HSV`, `HSI`, `HWB`, `XYZ`, `LAB`, `LCH`, `xyY`); 又或者像LESS/SASS那样对颜色进行操作（`darken`/`lighten`, `saturate`/`desaturate`, `spin`, `mix`); 支持`CMC(l:c)`、 `CIE2000、` `CIE1994、` `CIE1976`等色差查询。

## 二. 快速开始

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

## 三. 取得Color实例对象

### colorsea()

使用`colorsea(rgb, alpha)`函数创建一个颜色实例对象，

```typescript
/**
colorsea函数包含两个参数:
@param rgb string | [number, number, number] 
 （必填）十六进制rgb值，或[r, g, b]数组
@param alpha number 
 （非必填）不透明度，按受[0, 100]的范围，默认值为100，即100%
 */

// 可以传入HEX字
colorsea('#cc0020', 90)
// or [R, G, B]
colorsea([204, 0, 32], 90)
```

<ColorBox box-color="rgba(204, 0, 32, 90%)">colorsea('#cc0020', 90)</ColorBox>

---

::: tip
除了通过colorsea函数创建Color实例对象外，还可以通过其它颜色空间方法创建Color实例
:::

```typescript
const { rgb, hsl, hsv, hsi, hwb, xyz, lab, lch } = colorsea
/**
* 以上所有颜色空间方法，都接受4个参数，
* 前三个参数为必填项，是该颜色空间的颜色设定值，
* 第4个参数为alpha通道，非必填，默认值为100，即为100%不透明。
*/ 
const color = rgb(255, 0, 0)
const color2 = hsl(0, 100, 50)
// ...
```

---

### colorsea.rgb

colorsea.rgb(r, g, b, alpha) 等同于 colorsea(rgb, alpha)

```typescript
/**
@param r number 红  范围[0, 255]
@param g number 绿  范围[0, 255]
@param b number 蓝  范围[0, 255]
@param alpha number alpha  范围[0, 100]
*/
colorsea.rgb(r: number, g: number, b: number, alpha?: number)

// 示例
colorsea.rgb(100, 20, 92)
```

<ColorBox box-color="rgb(100, 20, 92)">colorsea.rgb(100, 20, 92)</ColorBox>

---

### colorsea.hsl

```typescript
/**
@param h number 色相    范围[0, 360)
@param s number 饱和度  范围[0, 100]
@param l number 光亮度    范围[0, 100]
@param alpha number alpha  范围[0, 100]
*/
colorsea.hsl(h: number, s: number, l: number, alpha?: number)

// 示例
colorsea.hsl(180, 90, 32)
```

<ColorBox box-color="hsl(180, 90%, 32%)">colorsea.hsl(180, 90, 32)</ColorBox>

---

### colorsea.hsv

```typescript
/**
@param h number 色相    范围[0, 360)
@param s number 饱和度  范围[0, 100]
@param v number 明度    范围[0, 100]
@param alpha number alpha  范围[0, 100]
*/
colorsea.hsv(h: number, s: number, v: number, alpha?: number)

// 示例
colorsea.hsv(100, 100, 50)
```

<ColorBox box-color="#2a8000">colorsea.hsv(100, 100, 50)</ColorBox>

---

### colorsea.hsi

```typescript
/**
@param h number 色相    范围[0, 360)
@param s number 饱和度  范围[0, 100]
@param i number 亮度Intensity    范围[0, 100]
@param alpha number alpha  范围[0, 100]
*/
colorsea.hsi(h: number, s: number, i: number, alpha?: number)

// 示例
colorsea.hsi(55, 9, 31)
```

<ColorBox box-color="rgb(83, 82, 72)">colorsea.hsi(55, 9, 31)</ColorBox>

---

### colorsea.hwb

```typescript
/**
@param h number 色相    范围[0, 360)
@param w number 白度  范围[0, 100]
@param b number 黑度   范围[0, 100]
@param alpha number alpha  范围[0, 100]
*/
colorsea.hwb(h: number, w: number, b: number, alpha?: number)

// 示例
colorsea.hwb(200, 30, 47)
```

<ColorBox box-color="#4d7487">colorsea.hwb(200, 30, 47)</ColorBox>

---

### colorsea.cmyk

```typescript
/**
@param c number 青   范围[0, 100]
@param m number 品红      范围[0, 100]
@param y number 黄      范围[0, 100]
@param k number 黑      范围[0, 100]
@param alpha number alpha  范围[0, 100]
*/
colorsea.cmyk(c: number, m: number, y: number, k: number, alpha?: number)

// 示例
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
@param alpha number alpha  范围[0, 100]
*/
colorsea.xyz(x: number, y: number, z: number, alpha?: number)

// 示例
colorsea.xyz(36.44, 21.54, 20.98)
```

<ColorBox box-color="#e0457b">colorsea.xyz(36.44, 21.54, 20.98)</ColorBox>

### colorsea.lab

```typescript
/**
@param l number 亮度 [0,100]
@param a number 红色到绿色 [127,-128]
@param b number 黄色到蓝色 [127,-128]
@param alpha number alpha  范围[0, 100]
*/
colorsea.lab(l: number, a: number, b: number, alpha?: number)

// 示例
colorsea.lab(50.57, 8.77, -46.64)
```

<ColorBox box-color="#4678C8">colorsea.lab(50.57, 8.77, -46.64)</ColorBox>

---

### colorsea.lch

```typescript
/**
@param l number 亮度
@param c number 色度
@param h number 色相 [0, 360)
@param alpha number alpha  范围[0, 100]
*/
colorsea.lch(l: number, c: number, h: number, alpha?: number)

// 示例
colorsea.lch(50, 120, 20)
```

<ColorBox box-color="#ff003b">colorsea.lch(50, 120, 20)</ColorBox>

---

## 四. 颜色空间转换

创建color实例后，可以通过color实例的以下这些方法取得对应的颜色空间数值，从而轻易地进行颜色空间转换。

:::tip
方法包括：`rgb()` `cmyk()` `hsl()` `hsv()` `hsi()` `hwb()` `xyz()` `lab()` `lch()` `xyY()`
这些方法都有一个参数`round`，其类型为`boolean | number`
<br>默认值为 `true`

- 当为 `true` 时，按默认的设定保留小数位数。
- 为 `false` 时，将返回所有计算出的小数位。
- 为 `number` 时，用于指定保留多少位小数。
:::

**示例：**

```typescript
// hsl to rgb
const color = colorsea.hsl(0, 100, 50)
color.rgb() // [255, 0, 0]
// to lab
color.lab() // [53.24, 80.09, 67.2]
// 不处理小数
color.lab(false) // [ 53.24079414130722, 80.09245959641109, 67.20319651585301 ]

// 其它颜色空间方法类似...
```

### color.rgb()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[r, g, b]`

### color.rgba()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[r, g, b, alpha]`

### color.cmyk()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[c, m, y, k]`

### color.hsl()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, l]`

### color.hsla()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, l, alpha]`

### color.hsv()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, v]`

### color.hsi()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, i]`

### color.hwb()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, w, b]`

### color.xyz()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[x, y, z]`

### color.lab()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[l, a, b]`

### color.lch()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[l, c, h]`

### color.xyY()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[x, y, Y]`

### color.hex()

- **@param** alphaFlag: 0 | 1 | 2
  - 0: 不展示alpha值，
  - 1：展示alpha值，
  - 2：(默认值)当alpha不等于100%才展示alpha

- **@return** 返回RGB十六进制字符串

## 五. 颜色操作

### 示例

示例1： 加深颜色 20%

```typescript
colorsea('#ff0000').darken(20) // #cc0000
```

<ColorBox box-color="#ff0000">#ff0000</ColorBox> -> <ColorBox box-color="#990000">#990000</ColorBox>

示例2：

你可以进行连续操作: **旋转色相 180度** -> **加深30%** -> **减少饱和度 10%**

```typescript
colorsea('#ff0000').spin(180).darken(30).desaturate(10) // Color: #0ac2c2
```

<ColorBox box-color="#ff0000">#ff0000</ColorBox> -> <ColorBox box-color="#056161">#056161</ColorBox>

:::tip
每次操作都会返会一个新的Color实例对象
:::

### color.lighten()

增加亮度

```typescript
/**
  * Increase lightness
  * 增加亮度
  * @param amount 光亮度增加百分多少, 默认为5，代表5%
  * @param method 如果填入relative则表示参数amount为相对值
  * @returns Color
  */
color.lighten(amount: number = 5, method?: string) => Color
```

例：增加亮度10%

```typescript
colorsea('#338800').lighten(10) // Color: #46bb00
```

<ColorBox box-color="#338800">#338800</ColorBox> -> <ColorBox box-color="#46bb00">#46bb00</ColorBox>

### color.darken()

减少光亮度

```typescript
 /**
   * Reduce lightness
   * 减少光亮度
   * @param amount 光亮度减少百分多少, 默认为5，代表5%
   * @param method 如果填入relative则表示参数amount为相对值
   * @returns Color
   */
color.darken(amount: number = 5, method?: string) => Color
```

例：减少光亮度10%

```typescript
colorsea('#338800').darken(10) // Color: #205500
```

<ColorBox box-color="#338800">#338800</ColorBox> -> <ColorBox box-color="#205500">#205500</ColorBox>

### color.saturate()

增加饱和度

```typescript
 /**
   * Increase saturation
   * 增加饱和度
   * @param amount 饱和度增加百分多少, 默认为5，代表5%
   * @param method 如果填入relative则表示参数amount为相对值
   * @returns new Color
   */
color.saturate(amount: number = 5, method?: string) => Color
```

例：增加饱和度30%

```typescript
colorsea('#E5B7A1').saturate(30) // Color: #f7b18f
```

<ColorBox box-color="#E5B7A1">#E5B7A1</ColorBox> -> <ColorBox box-color="#f7b18f">#f7b18f</ColorBox>

### color.desaturate()

降低饱和度

```typescript
 /**
   * Reduce saturation
   * 降低饱和度
   * @param amount 饱和度减少百分多少, 默认为5，代表5%
   * @param method 如果填入relative则表示参数amount为相对值
   * @returns new Color
   */
color.desaturate(amount: number = 5, method?: string) => Color
```

例：降低饱和度50%

```typescript
colorsea('#00ff00').desaturate(50) // Color: #40bf40
```

<ColorBox box-color="#00ff00">#00ff00</ColorBox> -> <ColorBox box-color="#40bf40">#40bf40</ColorBox>

### color.spin()

旋转色相

```typescript
/**
  * Rotating hue
  * 旋转色相
  * @param angle rotation angle 旋转角度
  */
color.spin(angle: number) => Color
```

例：顺时针旋转色相90度

```typescript
colorsea('#00ff00').spin(90) // Color: #007fff
```

<ColorBox box-color="#00ff00">#00ff00</ColorBox> -> <ColorBox box-color="#007fff">#007fff</ColorBox>

### color.adjustHue()

`color.adjustHue`为`color.spin`的别名，用法与color.spin一致

### color.complement()

取得补色，相当于 `color.spin(180)`

例：

```typescript
colorsea('#00ff00').complement() // Color: #0f00ff
```

<ColorBox box-color="#f0ff00" text-color="#000000">#00ff00</ColorBox> -> <ColorBox box-color="#0f00ff">#0f00ff</ColorBox>

### color.invert()

反色

例：

```typescript
colorsea('#ff3366').invert() // Color: #00cc99
```

<ColorBox box-color="#ff3366">#ff3366</ColorBox> -> <ColorBox box-color="#00cc99">#00cc99</ColorBox>

```typescript
colorsea('#cccccc').invert() // Color: #333333
```

<ColorBox box-color="#cccccc" text-color="#000000">#cccccc</ColorBox> -> <ColorBox box-color="#333333">#333333</ColorBox>

### color.mix()

颜色混合

```typescript
/**
  * mix color
  * 颜色混合
  * @param color 另一个颜色, 可以是Color实例，也可以是16进制颜色字符串，或者rgb颜色数组
  * @param weight 另一颜色的混合比例，默认值为50即50%
  * @returns Color
  */
color.mix(color: Color, weight: number = 50) => Color
```

例1：rgb(30, 177, 250)混合60%的hsl(0, 100%, 20%)

```typescript
colorsea([30, 177, 250]).mix(colorsea.hsl(0, 100, 20), 60) // Color #494764
```

<ColorBox box-color="rgb(30, 177, 250)">rgb(30, 177, 250)</ColorBox> .mix(<ColorBox box-color="hsl(0 100% 20%)">hsl(0 100% 20%)</ColorBox>, 60) == <ColorBox box-color="rgb(73, 71, 100)">rgb(73, 71, 100)</ColorBox>

例2：#CE9FFC 和 #EA5455 混合，各占50%

```typescript
const color1 = colorsea('#CE9FFC')
const color2 = colorsea('#EA5455')
color1.mix(color2) // Color #dc7aa9
// or color2可以不创建Color实例，直接使用hex字符串
color1.mix('#EA5455') // Color #dc7aa9
// or color2直接传入RGB数组
color1.mix([234, 84, 85]) // Color #dc7aa9
```

<ColorBox box-color="#CE9FFC">#CE9FFC</ColorBox> .mix(<ColorBox box-color="#EA5455">#EA5455</ColorBox>, 50) == <ColorBox box-color="#dc7aa9">#dc7aa9</ColorBox>

例3：连续mix

```typescript
colorsea('#0396FF').mix('#7367F0', 33).mix('#EA5455', 50) // #896da8
```

<ColorBox box-color="#0396FF">#0396FF</ColorBox> .mix(<ColorBox box-color="#7367F0">#7367F0</ColorBox>, 33).mix(<ColorBox box-color="#EA5455">#EA5455</ColorBox>, 50) == <ColorBox box-color="#896da8">#896da8</ColorBox>

### color.fadeIn()

增加不透明度

```typescript
 /**
   * Increase opacity
   * 增加不透明度
   * @param amount 不透明度增加的数值, 默认为10，代表10%
   * @param method 如果填入relative则表示参数amount为相对值
   * @returns new Color
   */
color.fadeIn(amount: number = 10, method?: string) => Color
```

例：

```typescript
colorsea('#ff0000', 10).fadeIn(30) // #ff000066
```

<ColorBox box-color="#ff00001a">#ff00001a</ColorBox> -> <ColorBox box-color="#ff000066">#ff000066</ColorBox>

### color.fadeOut()

减少不透明度

```typescript
 /**
   * Reduce opacity
   * 减少不透明度
   * @param amount 不透明度减少的数值, 默认为10，代表10%
   * @param method 如果填入relative则表示参数amount为相对值
   * @returns new Color
   */
color.fadeOut(amount: number = 10, method?: string) => Color
```

例：

```typescript
colorsea('#ff0000', 100).fadeOut(50) // #ff000080
```

<ColorBox box-color="#ff0000">#ff0000</ColorBox> -> <ColorBox box-color="#ff000080">#ff000080</ColorBox>

### color.opacify()

`color.opacify` 为 `color.fadeIn` 别名，用法与 `color.fadeIn` 一致

### color.transparentize()

`color.transparentize` 为 `color.fadeOut` 别名，用法与 `color.fadeOut` 一致

## 六. 颜色取值和改值

### color.red()

```typescript
color.red() => number
color.red(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得rgb的红色通道的值，范围为[0, 255]
  - 当传入amount时，为修改红色通度的值，并返回一个新的Color实例

例1：取得红色通道值

```typescript
colorsea('#ffcc22').red() // 255
```

例2：设置红色通道为200

```typescript
colorsea('#ffcc22').red(200) // Color #c8cc22
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#c8cc22">#c8cc22</ColorBox>

### color.green()

```typescript
color.green() => number
color.green(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得rgb的绿色通道的值，范围为[0, 255]
  - 当传入amount时，为修改绿色通度的值，并返回一个新的Color实例

例1：取得绿色通道值

```typescript
colorsea('#ffcc22').green() // 204
```

例2：设置绿色通道为100

```typescript
colorsea('#ffcc22').green(100) // Color #ff6422
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#ff6422">#ff6422</ColorBox>

### color.blue()

```typescript
color.blue() => number
color.blue(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得rgb的蓝色通道的，值范围为[0, 255]
  - 当传入amount时，为修改蓝色通度的值，并返回一个新的Color实例

例1：取得蓝色通道值

```typescript
colorsea('#ffcc22').blue() // 34
```

例2：设置蓝色通道为255

```typescript
colorsea('#ffcc22').blue(255) // Color #ffccff
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#ffccff">#ffccff</ColorBox>

### color.hue()

```typescript
color.hue() => number
color.hue(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得色相值，范围为[0, 360)
  - 当传入amount时，为修改色相值，并返回一个新的Color实例

例1：取得色相

```typescript
colorsea('#ffcc22').hue() // 46
```

例2：设置色相为120°

```typescript
colorsea('#ffcc22').hue(120) // Color #24ff24
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#24ff24">#24ff24</ColorBox>

### color.saturation()

```typescript
color.saturation() => number
color.saturation(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得饱和度值，范围为[0, 100]
  - 当传入amount时，为修改饱和度，并返回一个新的Color实例

例1：取得饱和度

```typescript
colorsea('#ffcc22').saturation() // 100
```

例2：设置饱和度为20%

```typescript
colorsea('#ffcc22').saturation(20) // Color #a79d7b
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#a79d7b">#a79d7b</ColorBox>

### color.lightness()

```typescript
color.lightness() => number
color.lightness(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得光亮度，范围为[0, 100]
  - 当传入amount时，为修改光亮度，并返回一个新的Color实例

例1：取得光亮度

```typescript
colorsea('#ffcc22').lightness() // 57
```

例2：设置光亮度为30%

```typescript
colorsea('#ffcc22').lightness(30) // Color #664e00
```

<ColorBox box-color="#ffcc22">#ffcc22</ColorBox> -> <ColorBox box-color="#664e00">#664e00</ColorBox>

### color.alpha()

```typescript
color.alpha() => number
color.alpha(amount: number) => Color
```

- 参数 amount?: number
  - 当不传入amount时，取得alpha通道的值，范围为[0, 100]
  - 当传入amount时，为修改alpha通道的值，并返回一个新的Color实例

例1：取得不透明度

```typescript
colorsea('#22994a', 90).alpha() // 90
```

例2：设置不透明度为30%

```typescript
colorsea('#22994a', 90).alpha(30) // Color #22994a33
```

<ColorBox box-color="#22994a">#22994a</ColorBox> -> <ColorBox box-color="#22994a33">#22994a33</ColorBox>

### color.luma()

取得感知亮度

```typescript
color.luma() => number
```

例

```typescript
colorsea('#22994a').luma() // 0.23616959154733871
```

:::tip
`color.red()`,`color.green()`,`color.blue()`,`color.hue()`,`color.saturation()`,`color.lightness()`, `color.alpha()`,`color.luma()`等方法的取值，如果其计算结果为小数，将会返会所有小数位数，并不会将结果进行取整或截取多少位小数。
:::

## 七. 色差 （deltaE）

color实例包含一个deltaE方法。可用于查询色差，其支持 `CMC(l:c)`, `CIE2000`, `CIE1994`, `CIE1976` 多种色差公式查询

```typescript
color.deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting) => number
```

注：当前颜色实例对象`color`为**标准色**，第一个参数`sampleColor`为**样品色**

参数说明：

- @param **sampleColor** 样品颜色
- @param **mode** 色差模式，即选用哪种公式计算色差，默认值为 `CMC`, 有以下几种可选： `CMC` | `CIE2000` | `CIE1994` | `CIE1976`
- @param **setting** 不同的色差公式有不同的系数可设置
  - **CMC**: `{ l: number, c: number }` 默认值为 `{ l: 1, c: 1 }`
  - **CIE2000**: `{ kL: number; kC: number; kH: number }` 默认值为 `{ kL: 1; kC: 1; kH: 1 }`
  - **CIE1994**:` { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' } `默认值为 `{ kL: 1; kC: 1; kH: 1, cate: 'graphic' }`, 当 cate为`textiles`时，kL的值会变为2，无视设置

### CMC(l:c)色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CMC(1:1)公式
color1.deltaE(color2, 'CMC') // 5.754...
// 参数二默认为'CMC' 故可省略参数二
color1.deltaE(color2)

// CMC(2:1)公式, 只需把权重因子l设为2即可 (c默认为1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719...

```

:::tip
CMC（l:c）色差公式中，l表示明度加权值，调节明度的相对宽容量；c表示彩度加权值，调节彩度的相对宽容量。行业不同，可以通过调节l或c的值，调整明度和饱和度对总色差的影响程度。

- 在对色差的感知性进行评价时，推荐采用l:c  = 1: 1 ，如涂料、塑料行业。
- 在对色差的可接受性进行评价时，推荐采用l:c  = 2: 1 ，在纺织印染等行业对产品质量进行控制大多推荐采用 l:c  = 2: 1
:::

### CIE2000色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CIE2000公式
color1.deltaE(color2, 'CIE2000') // 3.6815...

// （效正系数，kL, kC, kH 默认值都为1）
color1.deltaE(color2, 'CIE2000', { kL：1, kC: 1: kH: 1})
```

### CIE1994色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CIE1994公式
color1.deltaE(color2, 'CIE1994') // 3.3725...

// （效正系数，kL, kC, kH 默认值都为1）
color1.deltaE(color2, 'CIE1994', { kL：1, kC: 1: kH: 1})

// 注：cate默认值为 'graphic'，即图像艺术（graphic arts）
// 如果用于进行织物评价，设置cate为'textiles'。
color1.deltaE(color2, 'CIE1994', { cate: 'textiles'})

```

:::tip
当 `{ cate: 'textiles' }` 时，系数 `kL`将无视自定义设置，自动变为2。
:::

### CIE1976色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CIE1976公式
color1.deltaE(color2, 'CIE1976') // 20.1246...

```

# 颜色操作

## 示例

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

## color.lighten()

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

## color.darken()

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

## color.saturate()

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

## color.desaturate()

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

## color.spin()

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

## color.adjustHue()

`color.adjustHue`为`color.spin`的别名，用法与color.spin一致

## color.complement()

取得补色，相当于 `color.spin(180)`

例：

```typescript
colorsea('#00ff00').complement() // Color: #0f00ff
```

<ColorBox box-color="#f0ff00">#00ff00</ColorBox> -> <ColorBox box-color="#0f00ff">#0f00ff</ColorBox>

## color.invert()

反色

例：

```typescript
colorsea('#ff3366').invert() // Color: #00cc99
```

<ColorBox box-color="#ff3366">#ff3366</ColorBox> -> <ColorBox box-color="#00cc99">#00cc99</ColorBox>

```typescript
colorsea('#cccccc').invert() // Color: #333333
```

<ColorBox box-color="#cccccc">#cccccc</ColorBox> -> <ColorBox box-color="#333333">#333333</ColorBox>

## color.mix()

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

## color.fadeIn()

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

## color.fadeOut()

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

## color.opacify()

`color.opacify` 为 `color.fadeIn` 别名，用法与 `color.fadeIn` 一致

## color.transparentize()

`color.transparentize` 为 `color.fadeOut` 别名，用法与 `color.fadeOut` 一致
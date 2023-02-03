
# Color operation

## Example

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

## color.lighten()

Increase lightness

```typescript
/**
  * Increase lightness
  * @param amount Lightness increase percentage, the default is 5, which means 5%
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

## color.darken()

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

## color.saturate()

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

Example: Increase saturation by 30%

```typescript
colorsea('#E5B7A1').saturate(30) // Color: #f7b18f
```

<ColorBox box-color="#E5B7A1">#E5B7A1</ColorBox> -> <ColorBox box-color="#f7b18f">#f7b18f</ColorBox>

## color.desaturate()

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

## color.spin()

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

## color.adjustHue()

`color.adjustHue` is an alias of `color.spin`, the usage is consistent with color.spin

## color.complement()

Get the complementary color, equivalent to `color.spin(180)`

Example:

```typescript
colorsea('#00ff00').complement() // Color: #0f00ff
```

<ColorBox box-color="#f0ff00" text-color="#000000">#00ff00</ColorBox> -> <ColorBox box-color="#0f00ff">#0f00ff</ColorBox>

## color.invert()

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

## color.mix()

color mixing

```typescript
/**
  * color mixing
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

## color.fadeIn()

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

## color.fadeOut()

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

## color.opacify()

`color.opacify` is an alias of `color.fadeIn`, the usage is consistent with `color.fadeIn`

## color.transparentize()

`color.transparentize` is an alias of `color.fadeOut`, the usage is consistent with `color.fadeOut`

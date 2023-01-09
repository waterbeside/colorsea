
# Color value and change value

## color.red()

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

## color.green()

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

## color.blue()

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

## color.hue()

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

## color.saturation()

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

## color.lightness()

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

## color.alpha()

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

## color.luma()

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
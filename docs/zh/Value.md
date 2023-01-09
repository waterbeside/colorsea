# 颜色取值和改值


## color.red()

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

## color.green()

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

## color.blue()

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

## color.hue()

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

## color.saturation()

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

## color.lightness()

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

## color.alpha()

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

## color.luma()

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

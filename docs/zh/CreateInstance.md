# 创建Color实例

## colorsea()

使用`colorsea(colorInput, alpha, config)`函数创建一个颜色实例对象，

### 参数说明

- **colorInput**: string | [number, number, number]
  - 颜色数据输入（*必填*）
  - 当类型为string时，可以传入以几种形式的字符串
    - 1 hex字符串，如 `'#ffffff'`，
    - 2 颜色空间函数字符串<Badge text="v1.2.0+" type="tip"/>：如`'rgb(255, 255, 255)'`、 `'hsl(0, 20%, 50%)'` 等，此方式仅在**v1.2.0**及之后的版本支持，具体细节请参考后续的描述[【简单示例-示例二】](#spaceFunctionSample) 
    - 3 颜色名称，加载颜色名称后，可直接使用该颜色的名称作为参数，具体用法请参考[【颜色名称】](./Names.md)
  - 当类型为 [number, number, number]元组时，为rgb值

- **alpha**: number | undefined
  - alpha通道（不透明度），只接受范围为`[0, 100]`的数值, (*非必填*)
  - 当此参数为`undefined`时，如果`colorInput`参数带有`alpha`值设置，则`alpha`值按`colorInput`设定，否则默认值为`100`

- **config**<Badge text="v1.2.0+" type="tip"/>: Config 
  - 设置  (*非必填*)
  - 注意，此参数在**v1.2.0**之后才包含

  ```typescript
  type Config = {
    throwParseError: boolean //  如果解析颜色出错，是否抛出错误, 默认值为false。当为false时，输入错误的颜色值，默认会输出黑色。
  }
  ```

### 简单示例

**示例1**：基本用法

```typescript

// 可以传入HEX字
colorsea('#cc0020', 90)
// or [R, G, B]
colorsea([204, 0, 32], 90)
// 也等同于
colorsea('rgb(204, 0, 32)', 90)
// 或
colorsea('rgba(204, 0, 32, 90%)')
```

<div id="spaceFunctionSample"></div>

<ColorBox box-color="rgba(204, 0, 32, 90%)">colorsea('#cc0020', 90)</ColorBox>


**示例2**：使用颜色空间函数字符串

colorInput参数可以以字符串型式输入以下几种颜色空间值设定

 **rgb**, **rgba**, **cmyk**, **lab**, **hsl**, **hsla**, **hsv**, **hsva**,  **lch**, **hwb**, **hwba**, **xyz**,

```typescript
colorsea('hsl(150, 80%, 60%)')
colorsea('hsl(150, 80, 60)')
colorsea('hsl(150, 0.8, 0.6)')
```

<ColorBox box-color="hsl(150, 80%, 60%)">colorsea('hsl(150, 80%, 60%)')</ColorBox>


```typescript
colorsea('hsla(150, 80%, 60%, 20%)')
// 如果inputColor参数设有alpha值，alpha参数也单独设置了值，优先使用alpha参数的值
colorsea('hsla(150, 80%, 60%, 20%)', 40)
```

<ColorBox box-color="hsla(150, 80%, 60%, 20%)">colorsea('hsla(150, 80%, 60%, 20%)')</ColorBox> - 

<ColorBox box-color="hsla(150, 80%, 60%, 20%)" :alpha="40">colorsea('hsla(150, 80%, 60%, 20%)', 40)</ColorBox>


```typescript
colorsea('cmyk(40, 80, 60, 20)')
```

<ColorBox box-color="cmyk(40, 80, 60, 20)">colorsea('cmyk(40, 80, 60, 20)')</ColorBox>

```typescript
colorsea('hwb(180, 50%, 10%)')
// 各种颜色空间方法类似，此处不全部演示
```

<ColorBox box-color="hwb(180, 50%, 10%)">colorsea('hwb(180, 50%, 10%)')</ColorBox>


:::tip

其中如果包含有百分数形式的参数，可以以下几种型式表示：
- 直接使用百分号, 如：`colorsea('rgba(204, 0, 32, 90%)')`
- 可以不写百分号，输入**90**即为90%：`colorsea('rgba(204, 0, 32, 90)')`
- 使用小于1的小数，输入**0.9**即为90%: `colorsea('rgba(204, 0, 32, 0.9)')`
以上三种输入的颜色是**相等**的。

**需要注意的是：**

如果想输入`0.1%`则不能直接输入`0.1`，因为输入少于`1`的数，会自动乘以`100`，输入`0.1`即为`10%`。
所以，你可以直接输入`0.1%`, 或者`0.001`以代表`0.1%`

**这种转换只有在字符串形式输入colorInput参数以有效，除非特别说明，colorsea的大部分百分数，都以[0, 100]范围的数字代表0%到100%**

:::

---


### 使用颜色名称

`colorsea()`的第一个参数还支持传入颜色名称，使用这些颜色名称时，要另外加载名称映射关系表，现支持的颜色名称有**X11 color names**、**中国传统色**、**日本传统色**。也可以自定义颜色名，具体用法请参看文档[【使用颜色名称】](/colorsea/zh/Names.html)

---
---

### 其它

除了通过colorsea函数创建Color实例对象外，还可以通过其它颜色空间方法创建Color实例

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

## colorsea.rgb

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

## colorsea.hsl

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

## colorsea.hsv

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

## colorsea.hsi

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

<ColorBox box-color="hsi(55, 9, 31)">colorsea.hsi(55, 9, 31)</ColorBox>

---

## colorsea.hwb

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

<ColorBox box-color="hwb(200, 30, 47)">colorsea.hwb(200, 30, 47)</ColorBox>

---

## colorsea.cmyk

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

<ColorBox box-color="cmyk(65, 40, 0, 21.57)">colorsea.cmyk(65, 40, 0, 21.57)</ColorBox>

---

## colorsea.xyz

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

<ColorBox box-color="xyz(36.44, 21.54, 20.98)">colorsea.xyz(36.44, 21.54, 20.98)</ColorBox>

## colorsea.lab

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

## colorsea.lch

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

## colorsea.random

生成随机颜色<Badge type="tip" text="v1.1.0+" vertical="top" />

```typescript
colorsea.random()
```

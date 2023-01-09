# 创建Color实例

## colorsea()

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

`colorsea()`的第一个参数还支持传入颜色名称，使用这些颜色名称时，要另外加载名称映射关系表，现支持的颜色名称有**X11 color names**、**中国传统色**、**日本传统色**。也可以自定义颜色名，具体用法请参看文档[使用颜色名称](/colorsea/zh/Names.html)

---

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

<ColorBox box-color="rgb(83, 82, 72)">colorsea.hsi(55, 9, 31)</ColorBox>

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

<ColorBox box-color="#4d7487">colorsea.hwb(200, 30, 47)</ColorBox>

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

<ColorBox box-color="rgb(70, 120, 200)">colorsea.cmyk(65, 40, 0, 21.57)</ColorBox>

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

<ColorBox box-color="#e0457b">colorsea.xyz(36.44, 21.54, 20.98)</ColorBox>

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

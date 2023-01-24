# Create a Color instance object

## colorsea()

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

The first parameter of `colorsea()` also supports passing in color names. When using these color names, you need to load the name mapping relationship table separately. The currently supported color names are **X11 color names**, **Chinese traditional colors**, **Japanese Traditional Colors**. You can also customize the color name. For specific usage, please refer to the document [Using Color Names](/colorsea/pages/Names.html)

---

In addition to creating Color instance objects through the colorsea function, you can also create Color instances through other color space methods

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

## colorsea.rgb

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

## colorsea.hsl

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

## colorsea.hsv

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

## colorsea.hsi

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

## colorsea.hwb

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

## colorsea.cmyk

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

## colorsea.xyz

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

## colorsea.lab

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

## colorsea.lch

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

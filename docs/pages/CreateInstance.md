# Create a Color instance object

## colorsea()

Create a color instance object using the `colorsea(rgb, alpha, config)` function.


### Parameters

- **colorInput**: string | [number, number, number]
  - Color data input (*Required*)
  - When the type is string, a string can be passed in several forms
    - 1 hex string such as  `'#ffffff'`，
    - 2 Color space function string<Badge text="v1.2.0+" type="tip"/>：For example`'rgb(255, 255, 255)'`、 `'hsl(0, 20%, 50%)'`  etc.，This mode is supported only in **v1.2.0** and later versions. For details, see the following description[【简单示例-示例二】](#spaceFunctionSample) 
    - 3 Color name: After the color name is loaded, you can directly use the color name as a parameter. For details, see[【 Use color names】](./Names.md)
  - When the type is a [number, number, number] tuple, it is a rgb value: [r, b, b]

- **alpha**: number | undefined
  - alpha channel (opacity), accepts only values in range `[0, 100]`, (*Optional*)
  - When the parameter is `undefined`, if the `colorInput` parameter with an `alpha` value set, then the `alpha` value is set by `colorInput`, otherwise the default value is `100`

- **config**<Badge text="v1.2.0+" type="tip"/>: Config
  - Settings (*Optional*)
  - Note that this parameter is included after **v1.2.0**

  ```typescript
  type Config = {
    throwParseError: boolean //  Whether to throw an error if parsing the color incorrectly. The default value is false. When false, enter the wrong color value and the default output is black.
  }
  ```

### Simple Example

**Example 1**: Basic usage

```typescript

// You can pass in a HEX string
colorsea('#cc0020', 90)
// or [R, G, B]
colorsea([204, 0, 32], 90)
// Also equal to
colorsea('rgb(204, 0, 32)', 90)
// or
colorsea('rgba(204, 0, 32, 90%)')
```

<div id="spaceFunctionSample"></div>

<ColorBox box-color="rgba(204, 0, 32, 90%)">colorsea('#cc0020', 90)</ColorBox>


**Example 2**: Uses the color space function string

The colorInput parameter can be entered as a string with the following color space values:

 **rgb**, **rgba**, **cmyk**, **lab**, **hsl**, **hsla**, **hsv**, **hsva**,  **lch**, **hwb**, **hwba**, **xyz**,

```typescript
colorsea('hsl(150, 80%, 60%)')
colorsea('hsl(150, 80, 60)')
colorsea('hsl(150, 0.8, 0.6)')
```

<ColorBox box-color="hsl(150, 80%, 60%)">colorsea('hsl(150, 80%, 60%)')</ColorBox>


```typescript
colorsea('hsla(150, 80%, 60%, 20%)')
// If the inputColor parameter has an alpha value and the alpha parameter is set separately, the value of the alpha parameter is preferred
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
// The other color space methods are similar and are not all shown here
```

<ColorBox box-color="hwb(180, 50%, 10%)">colorsea('hwb(180, 50%, 10%)')</ColorBox>


:::tip

If it contains parameters in the form of percentage, they can be expressed in the following types:
- Use percentage signs directly, such as:`colorsea('rgba(204, 0, 32, 90%)')`
- Can not write percent sign, input **90** equivalent to 90%：`colorsea('rgba(204, 0, 32, 90)')`
- Using decimals less than 1, enter **0.9** equivalent to 90%: `colorsea('rgba(204, 0, 32, 0.9)')`
The above three input colors are **equal**.

**What should be noted is:**

If you want to input `0.1%` can not directly input `0.1`, because input less than the number of `1`, will be automatically multiplied by `100`, input `0.1` is `10%`.

So, you can just type '0.1%', or '0.001' to represent '0.1%'

**This conversion only works if the colorInput argument is entered as a string. Unless otherwise noted, most percentages of colorsea are represented by numbers in the [0, 100] range from 0% to 100%**

:::

---

### Use color names

The first parameter of `colorsea()` also supports passing in color names. When using these color names, you need to load the name mapping relationship table separately. The currently supported color names are **X11 color names**, **Chinese traditional colors**, **Japanese Traditional Colors**. You can also customize the color name. For specific usage, please refer to the document [Using Color Names](/colorsea/pages/Names.html)

---

### Other

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

<ColorBox box-color="hsv(100, 100, 50)">colorsea.hsv(100, 100, 50)</ColorBox>

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
colorsea.hsi(20, 100, 80)
```

<ColorBox box-color="hsi(20, 100, 80)">colorsea.hsi(20, 100, 80)</ColorBox>

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

<ColorBox box-color="hwb(200, 30, 47)">colorsea.hwb(200, 30, 47)</ColorBox>

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

<ColorBox box-color="cmyk(65, 40, 0, 21.57)">colorsea.cmyk(65, 40, 0, 21.57)</ColorBox>

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

<ColorBox box-color="xyz(36.44, 21.54, 20.98)">colorsea.xyz(36.44, 21.54, 20.98)</ColorBox>

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

<ColorBox box-color="lab(50.57, 8.77, -46.64)">colorsea.lab(50.57, 8.77, -46.64)</ColorBox>

---

## colorsea.lch

```typescript
/**
@param l number lightness [0, 100]
@param c number chroma 
@param h number hue [0, 360)
@param alpha number alpha  range[0~100]
*/
colorsea.lch(l: number, c: number, h: number, alpha?: number)

// Example
colorsea.lch(50, 100, 20)
```

<ColorBox box-color="lch(54, 100, 20)">colorsea.lch(50, 100, 20)</ColorBox>

## colorsea.random

Generate random color

```typescript
colorsea.random()
```

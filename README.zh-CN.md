
# COLORSEA

---

[English](./README.md) | **简体中文**

## 📝 Table of Contents

- [关于](#about)
- [快速上手](#quick_started)

## 🧐 关于 <a name = "about"></a>

这是一个使用Typescript编写的颜色工具库，你可以使用此进行颜色空间的转换(RGB, HSL, HSV, HSI, HWB, XYZ, LAB, LCH, xyY)，又或者像LESS/SASS那样对颜色进行操作（darken/lighten, saturate/desaturate, spin, mix)

## 🏁 快速上手 <a name = "quick_started"></a>

```shell
# 安装
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

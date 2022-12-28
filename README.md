# ColorSea

[Document](https://waterbeside.github.io/colorsea/)

[English](./README.md) | [简体中文](./README.zh-CN.md)

## About

A color tool library written in Typescript, you can use it to convert color spaces (RGB, HSL, HSV, HSI, HWB, XYZ, LAB, LCH, xyY), or operate on colors like LESS/SASS ( darken/lighten, saturate/desaturate, spin, mix)

## Quick Start

```shell
# installation
npm install colorsea 
```

```typescript

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

For more detailed usage, please refer to the documentation: [https://waterbeside.github.io/colorsea/](https://waterbeside.github.io/colorsea/)
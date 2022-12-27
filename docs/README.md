---
sidebar: auto
---

# ColorSea

## About

This is a color tool library written in Typescript. You can use it to convert color spaces (RGB, HSL, HSV, HSI, HWB, XYZ, LAB, LCH, xyY), or to convert colors like LESS/SASS Operation (darken/lighten, saturate/desaturate, spin, mix)

## Quick Start

```shell
# installation
npm install colorsea 
```

```typescript
import colorsea from 'colorsea'

// ----- color conversion
colorsea('#ff0000').rgb() // [255, 0, 0]
colorsea('#ff0000', 0.5).rgba() // [255, 0, 0, 0.5]
const color = colorsea('#405060')
color.rgba() // [255, 0, 0, 0.5]
color.xyz() // [7.09, 7.67, 12.17]
color.lab() // [33.29, -1.94, -11.36] 
// Convert from other color spaces
colorsea.xyz(7.09, 7.67, 12.17).rgb() // [64, 80, 96]
colorsea.hsl(210, 0.2, 0.3137).rgb() // [64, 80, 96]
// ... Other color spaces are similar

// ---- Color operations
const color = colorsea('#ffffff')
const newColor = color.darken(0.1) // All operations will return a new Color instance object
newColor.hex() // #e6e6e6
colorsea('#000').lighten(0.1).hex() // #1a1a1a
colorsea('#ff0000').spin(180).hex() // #00ffff
colorsea.hsl(80, 0.9, 0.2).saturate(0.1).hsl() // [80, 1, 0.2]
colorsea.hsl(80, 0.9, 0.2).desaturate(0.1).hsl() // [80, 0.8, 0.2]
colorsea('#776600').fadeOut(0.1).rgba() // [119, 102, 0, 0.9]

const color1 = new Color('#ff0000')
const color2 = new Color('#0000ff')
const color = color1.mix(color2, 0.2)
color.hex() // #cc0033

```

## Get Color Instance



## Color Space Conversion

### rgb
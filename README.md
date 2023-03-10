# COLORSEA

[For detailed documents, please click here](https://colorsea.js.org)

![minzipped size](https://img.shields.io/bundlephobia/minzip/colorsea)
![typescript](https://img.shields.io/github/languages/top/waterbeside/colorsea)
![license](https://img.shields.io/npm/l/colorsea)
![last commit](https://img.shields.io/github/last-commit/waterbeside/colorsea)
![build](https://img.shields.io/github/actions/workflow/status/waterbeside/colorsea/build.yml)

[English](./README.md) | [简体中文](./README.zh-CN.md)

## About

**colorsea.js** is a tiny color tool library written in `Typescript`.

- You can use it to convert color spaces (`RGB`, `HSL`, `HSV`, `HSI`, `HWB`, `XYZ`, `LAB`, `LCH`, `xyY`),
- Adjust the color like LESS/SASS, such as `darken`/`lighten`, `saturate`/`desaturate`, `spin`, `fadeIn`/`fadeOut`, `mix` and other methods, easy to use.
- Support `CMC(l:c)`, `CIE2000`, `CIE1994`, `CIE1976` color difference queries.
- Support to use `X11`, `Chinese Traditional Color`, `Japanese Traditional Color` types of color names to get the color

## Quick Start

### Installation

```bash
npm install colorsea 
```

### Import & Use

#### Import

ES Module

```typescript
import colorsea from 'colorsea'
```

CommonJs

```javascript
const colorsea = require('colorsea')
```

Browser

```html:no-line-numbers
<script src="path/to/colorsea.js"></script>
```

#### Color space conversion

```typescript
// ----- color conversion
colorsea('#ff0000').rgb() // [255, 0, 0]
colorsea('#ff0000', 50).rgba() // [255, 0, 0, 50]
// The colorsea() function can create a Color instance
const color = colorsea('#405060')
color.rgba() // [255, 0, 0, 50]
color.xyz() // [7.09, 7.67, 12.17]
color.lab() // [33.29, -1.94, -11.36] 
// Convert from other color spaces
colorsea.xyz(7.09, 7.67, 12.17).rgb() // [64, 80, 96]
colorsea.hsl(210, 20, 31.37).rgb() // [64, 80, 96]
// ... Other color spaces are similar
```

#### Color operations

```typescript
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

#### Color difference calculation

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// CMC(1:1)
color1.deltaE(color2, 'CMC') // 5.754...

// CMC(2:1) formula, just set the weight factor l to 2 (c defaults to 1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719...

// CIE2000
color1.deltaE(color2, 'CIE2000') // 3.6815...

// CIE1994
color1.deltaE(color2, 'CIE1994') // 3.3725...

// CIE1976
color1.deltaE(color2, 'CIE1976') // 20.1246...

```

### Use color names

```typescript
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// Load X11 color names
colorsea.useNames(x11)

// At this point you can directly use the X11 color name to create the color instance
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
```

```typescript
import chinese from 'colorsea/colors/chinese' // Chinese traditional color
import nippon from 'colorsea/colors/nippon' // Japanese traditional color
// load both
colorsea.useNames(chinese).useNames(nippon)

// use
colorsea('山梗紫') // color: #61649F
colorsea('水がき') // color: #B9887D
```

For more detailed usage, please refer to the documentation: [https://colorsea.js.org](https://colorsea.js.org/)

## Reference

- [ https://github.com/sass/dart-sass/](https://github.com/sass/dart-sass/)
- [http://brucelindbloom.com/](http://brucelindbloom.com/)
- [https://www.w3.org/TR/AERT/#color-contrast](https://www.w3.org/TR/AERT/#color-contrast)
- [https://www.w3.org/TR/AERT/#color-contrast](https://www.w3.org/TR/AERT/#color-contrast)
- [x11: https://www.w3.org/TR/css-color-3/#svg-color](https://www.w3.org/TR/css-color-3/#svg-color)
- [中国传统色: http://zhongguose.com/](http://zhongguose.com/)
- [Nippon color names: https://nipponcolors.com/](https://nipponcolors.com/)


# COLORSEA

[详细文档请点这里](https://colorsea.js.org/zh/)

![minzipped size](https://img.shields.io/bundlephobia/minzip/colorsea)
![typescript](https://img.shields.io/github/languages/top/waterbeside/colorsea)
![license](https://img.shields.io/npm/l/colorsea)
![last commit](https://img.shields.io/github/last-commit/waterbeside/colorsea)
![build](https://img.shields.io/github/actions/workflow/status/waterbeside/colorsea/build.yml)

[English](./README.md) | **简体中文**

## 🧐 关于

**colorsea.js**是一个轻量的使用`Typescript`编写的颜色工具库

- 你可以使用此进行颜色空间的转换(`RGB`, `HSL`, `HSV`, `HSI`, `HWB`, `XYZ`, `LAB`, `LCH`, `xyY`)。
- 像LESS/SASS那样对颜色进行调整，如`darken`/`lighten`, `saturate`/`desaturate`, `spin`, `fadeIn`/`fadeOut`, `mix`等方法，单简易上手。
- 支持`CMC(l:c)`、 `CIE2000、` `CIE1994、` `CIE1976`等色差查询。
- 还可以使用`X11`、`中国传统色`、`日本传统色`等颜色名称来取得颜色。

## 🏁 快速上手

### 安装

```bash
npm install colorsea 
```

### 导入和使用

#### 导入

ES Module

```typescript:no-line-numbers
import colorsea from 'colorsea'
```

CommonJs

```javascript:no-line-numbers
const colorsea = require('colorsea')
```

Browser

```html:no-line-numbers
<script src="path/to/colorsea.js"></script>
```

#### 颜色空间转换

```typescript
// ----- color conversion
colorsea('#ff0000').rgb() // [255, 0, 0]
colorsea('#ff0000', 50).rgba() // [255, 0, 0, 50]
// colorsea() 函数可以创建一个Color实例
const color = colorsea('#405060')
color.rgba() // [255, 0, 0, 50]
color.xyz() // [7.09, 7.67, 12.17]
color.lab() // [33.29, -1.94, -11.36] 
// Convert from other color spaces
colorsea.xyz(7.09, 7.67, 12.17).rgb() // [64, 80, 96]
colorsea.hsl(210, 20, 31.37).rgb() // [64, 80, 96]
// ... Other color spaces are similar
```

#### 颜色操作

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

#### 色差计算

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CMC(1:1)公式
color1.deltaE(color2, 'CMC') // 5.754...
// 参数二默认为'CMC' 故可省略参数二
color1.deltaE(color2)

// CMC(2:1)公式, 只需把权重因子l设为2即可 (c默认为1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719...

// 使用CIE2000公式
color1.deltaE(color2, 'CIE2000') // 3.6815...

// 使用CIE1994公式
color1.deltaE(color2, 'CIE1994') // 3.3725...

// 使用CIE1976公式
color1.deltaE(color2, 'CIE1976') // 20.1246...

```

#### 使用颜色名称

```typescript
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// 载入X11颜色名
colorsea.useNames(x11)

// 此时你可以直接使用X11颜色名称来创建颜色
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
```

```typescript
import chinese from 'colorsea/colors/chinese' //中国传统色
import nippon from 'colorsea/colors/nippon' //日本传统色
// 同时载入两者
colorsea.useNames(chinese).useNames(nippon)

// 使用
colorsea('山梗紫') // color: #61649F
colorsea('水がき') // color: #B9887D
```

更明细的使用方式请参考文档： [https://colorsea.js.org/zh/](https://colorsea.js.org/zh/)

## 参考

- [ https://github.com/sass/dart-sass/](https://github.com/sass/dart-sass/)
- [http://brucelindbloom.com/](http://brucelindbloom.com/)
- [https://www.w3.org/TR/AERT/#color-contrast](https://www.w3.org/TR/AERT/#color-contrast)
- [https://www.w3.org/TR/AERT/#color-contrast](https://www.w3.org/TR/AERT/#color-contrast)
- [x11: https://www.w3.org/TR/css-color-3/#svg-color](https://www.w3.org/TR/css-color-3/#svg-color)
- [中国传统色: http://zhongguose.com/](http://zhongguose.com/)
- [Nippon color names: https://nipponcolors.com/](https://nipponcolors.com/)

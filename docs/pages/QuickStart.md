
# Quick Start

## Installation

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install colorsea 
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add colorsea 
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install colorsea 
```

  </CodeGroupItem>
</CodeGroup>

## Import & Use

### Import

<CodeGroup>
  <CodeGroupItem title="ES Module" active>

```typescript:no-line-numbers
import colorsea from 'colorsea'
```

  </CodeGroupItem>
  <CodeGroupItem title="CommonJs">

```javascript:no-line-numbers
const colorsea = require('colorsea')
```

  </CodeGroupItem>

  <CodeGroupItem title="Browser">

```html:no-line-numbers
<script src="path/to/colorsea.js"></script>
```

  </CodeGroupItem>
</CodeGroup>

### Color space conversion

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

### Color operations

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

### Color difference calculation

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

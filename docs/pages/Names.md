# Use color names

You can create a Color instance by color name, but you must first load the color name mapping relationship through `colorsea.useName(colorNames)` method.
Now supports `x11 color names`, `Chinese traditional colors`, `Japanese traditional colors`

**Example 1:** Basic usage

```typescript
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// Load X11 color names
colorsea.useNames(x11)

// At this point you can directly use the X11 color name to create the color
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
```

<ColorBox box-color="#00ffff">Aqua: #00ffff</ColorBox> - 
<ColorBox box-color="#7fffd4">Aquamarine: #7fffd4</ColorBox>

**Example 2:** Load multiple types of color names at the same time

```typescript
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
import chinese from 'colorsea/colors/chinese'
// Load the x11 name and traditional Chinese colors, which can be chained
colorsea.useNames(x11).useNames(chinese)

colorsea('Beige') // color: #F5F5DC
colorsea('山梗紫') // color: #61649f
```

<ColorBox box-color="#F5F5DC">Beige: #F5F5DC</ColorBox> - 
<ColorBox box-color="#61649f">山梗紫: #61649f</ColorBox>

**Example 3:** Prefixing color names

When loading color names of different series, if the name keywords conflict, the one loaded later will overwrite the one loaded earlier. To this end, you can format the name keywords uniformly, add a prefix to the keywords, and avoid conflicts.

The second parameter of the `colorsea.useNames()` method can pass in a callback function. This function has two parameters `key` and `value`, corresponding to the color name (key) and color value (value), which must return A tuple containing the processed `[key,value]`

```typescript
import colorsea from 'colorsea'
import chineseTr from 'colorsea/colors/chineseTr'
import nippon from 'colorsea/colors/nippon'
// Load Chinese traditional color (traditional), and Japanese traditional color at the same time
colorsea
  .useNames(chineseTr, (key, value) => [`zh:${key}`, value])
  .useNames(nippon, (key, value) => [`np:${key}`, value])

// Prefix is required when calling
colorsea('zh:潮蓝') // color: #2983bb
colorsea('np:紺青') // color: #113285
```

<ColorBox box-color="#2983bb">潮蓝: #2983bb</ColorBox> - 
<ColorBox box-color="#113285">紺青: #113285</ColorBox>

## X11 color names

In computing, on the X Window System, X11 color names are represented in a simple text file, which maps certain strings to RGB color values. It was traditionally shipped with every X11 installation,
The Web Color List is derived from it, and CSS3 has adopted most of the X11 colors.

```typescript
// Load
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
colorsea.useNames(x11)
// Use
colorsea('Aqua') // color: #00ffff
```

The following table is from the web "X11 Colors" list of the CSS3 specification

:::tip
- For more information about **X11 color names**, please refer to:[https://en.wikipedia.org/wiki/X11_color_names](https://en.wikipedia.org/wiki/X11_color_names)

- The color name keywords in the following table come from: [https://www.w3.org/TR/css-color-3/#svg-color](https://www.w3.org/TR/css-color-3/#svg-color)
:::

<X11List/>

## Chinese traditional colors

:::tip
Chinese traditional colors refer to: [http://zhongguose.com/](http://zhongguose.com/)

Contains two versions of **Simplified Chinese** and **Traditional Chinese**, please load as needed

- Simplified Chinese：'colorsea/colors/chinese'
- Traditional Chinese：'colorsea/colors/chineseTr'
:::

```typescript{4}
// Load
import colorsea from 'colorsea'
import chinese from 'colorsea/colors/chinese'
// Traditional Chinese version please inport 'colorsea/colors/chineseTr':
// import chineseTr from 'colorsea/colors/chineseTr'
colorsea.useNames(chinese)
// Use
colorsea('山梗紫') // color: #61649f
```

<ChineseColorList />

## Japanese traditional colors (Nippon colors)

:::tip
Japanese traditional colors refer to: [https://nipponcolors.com/](https://nipponcolors.com)

Contains two versions of **Kanji** and **Romanji**, please load as needed

- Kanji: 'colorsea/colors/nippon'
- Romanji: 'colorsea/colors/nipponRm'
:::

```typescript{4}
// Load
import colorsea from 'colorsea'
import nippon from 'colorsea/colors/nippon'
// 罗马字版本请加载 'colorsea/colors/nipponRm'
// import nipponRm from 'colorsea/colors/nipponRm'
colorsea.useNames(nippon)
// Use
colorsea('桑染') // color: #64363C
```

<NipponColorList />

## Custom color name

In addition to using the preset color names above, you can also customize the color names. For details, please refer to the following examples

```typescript
import colorsea from 'colorsea'

// Define an object to store the relationship of `color name: color value` in the form of `key: value`.
const myColorNames = {
  supperred: '#ff3333',
  almond: '#f7e8aa',
  milky: '#f9f4dc'
}

// Load the color name you just customized
colorsea.useNames(myColorName)

// Use
colorsea('milky') // color #f9f4dc

```

:::tip Notice
When customizing color names, the keys of all color names must be in lowercase. Case insensitive when using
:::

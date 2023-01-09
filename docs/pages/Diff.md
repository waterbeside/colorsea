
# color difference （deltaE）

cThe color instance contains a deltaE method. Can be used to query color difference, it supports `CMC`, `CIE2000`, `CIE1994`, `CIE1976` color difference formula query

```typescript
color.deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting) => number
```

Note: The current color instance object `color` is **standard color**, the first parameter `sampleColor` is **sample color**

Parameter Description:

- @param **sampleColor** sample color
- @param **mode** Color difference mode, which formula to use to calculate color difference, the default value is `CMC`, there are the following options: `CMC` | `CIE2000` | `CIE1994` | `CIE1976`
- @param **setting** Different color difference formulas have different coefficients that can be set
  - **CMC**: `{ l: number, c: number }` The default value is `{ l: 1, c: 1 }`
  - **CIE2000**: `{ kL: number; kC: number; kH: number }` The default value is `{ kL: 1; kC: 1; kH: 1 }`
  - **CIE1994**:` { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' } ` The default value is `{ kL: 1; kC: 1; kH: 1, cate: 'graphic' }`, When cate is `textiles`, the value of kL will become 2, regardless of the setting

## CMC(l:c)

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Use the CMC(1:1) formula
color1.deltaE(color2, 'CMC') // 5.754...
// The second parameter defaults to 'CMC', so the second parameter can be omitted
color1.deltaE(color2)

// CMC(2:1) formula, just set 'l' to 2 ('c' defaults to 1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719...

```

:::tip
In the CMC (l:c) color difference formula, `l` represents the weighted value of lightness, which adjusts the relative width of lightness; `c` represents the weighted value of chroma, which adjusts the relative width of chroma. Depending on the industry, you can adjust the influence of lightness and saturation on the total color difference by adjusting the value of `l` or `c`.

- When evaluating the perception of color difference, it is recommended to use `l:c = 1:1`, such as paint, plastic industry.
- When evaluating the acceptability of color difference, it is recommended to use `l:c = 2: 1`, and it is recommended to use `l:c = 2: 1` to control product quality in textile printing and dyeing industries
:::

## CIE2000

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Using the CIE2000 formula
color1.deltaE(color2, 'CIE2000') // 3.6815...

// Efficacy coefficient, kL, kC, kH default value is 1
color1.deltaE(color2, 'CIE2000', { kL：1, kC: 1: kH: 1})
```

## CIE1994

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Using the CIE1994 formula
color1.deltaE(color2, 'CIE1994') // 3.3725...

// Effect coefficient, kL, kC, kH default value is 1
color1.deltaE(color2, 'CIE1994', { kL：1, kC: 1: kH: 1})

// Note: The default value of cate is 'graphic', that is, graphic arts
// If used for fabric evaluation, set cate to 'textiles'.
color1.deltaE(color2, 'CIE1994', { cate: 'textiles'})

```

:::tip
When `{ cate: 'textiles' }`, the coefficient `kL` will ignore the custom setting and automatically become 2.
:::

## CIE1976

Example：

```typescript
const color1 = colorsea.lab(80, 30, 120) // Standard color (reference color)
const color2 = colorsea.lab(79, 28, 100) // Sample color

// Using the CIE1976 formula
color1.deltaE(color2, 'CIE1976') // 20.1246...

```

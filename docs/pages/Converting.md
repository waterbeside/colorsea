# Color converting

After the **color instance** is created, the corresponding color space value can be obtained by the following methods of the color instance, so that the color space conversion can be easily carried out.

:::tip
Methods include: `rgb()` `cmyk()` `hsl()` `hsv()` `hsi()` `hwb()` `xyz()` `lab()` `lch()` `xyY()`
The method has a parameter ` round `, its type is ` Boolean | number `
<br>The default value is `true`

- When `true`, the number of decimal places is left as default.
- When `false`, all calculated decimal places are returned.
- When `number`, specifies how many decimal places to reserve.
:::

**Example：**

```typescript
// hsl to rgb
const color = colorsea.hsl(0, 100, 50)
color.rgb() // [255, 0, 0]
// to lab
color.lab() // [53.24, 80.09, 67.2]
// Do not deal with decimals
color.lab(false) // [ 53.24079414130722, 80.09245959641109, 67.20319651585301 ]

// The other color space methods are similar...
```

## color.rgb()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[r, g, b]`

## color.rgba()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[r, g, b, alpha]`

## color.cmyk()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[c, m, y, k]`

## color.hsl()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, l]`

## color.hsla()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, l, alpha]`

## color.hsv()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, v]`

## color.hsi()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, s, i]`

## color.hwb()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (default value) Returns an integer without reserving a decimal
- number: specifies the number of decimal places

- **@return** `[h, w, b]`

## color.xyz()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[x, y, z]`

## color.lab()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[l, a, b]`

## color.lch()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[l, c, h]`

## color.xyY()

- **@param** round: boolean | number
- false: returns all decimal places without decimal processing
- true: (Default value) Number of decimal places to keep: 2
- number: specifies the number of decimal places

- **@return** `[x, y, Y]`

## color.hex()

- **@param** alphaFlag: 0 | 1 | 2
  - 0: do not display alpha value,
  - 1: display alpha value,
  - 2: (default value) only show alpha when alpha is not equal to 100%

- **@return** Returns an RGB hex string

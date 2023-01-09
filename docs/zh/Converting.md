# 转换到其它颜色空间


创建color实例后，可以通过color实例的以下这些方法取得对应的颜色空间数值，从而轻易地进行颜色空间转换。

:::tip
方法包括：`rgb()` `cmyk()` `hsl()` `hsv()` `hsi()` `hwb()` `xyz()` `lab()` `lch()` `xyY()`
这些方法都有一个参数`round`，其类型为`boolean | number`
<br>默认值为 `true`

- 当为 `true` 时，按默认的设定保留小数位数。
- 为 `false` 时，将返回所有计算出的小数位。
- 为 `number` 时，用于指定保留多少位小数。
:::

**示例：**

```typescript
// hsl to rgb
const color = colorsea.hsl(0, 100, 50)
color.rgb() // [255, 0, 0]
// to lab
color.lab() // [53.24, 80.09, 67.2]
// 不处理小数
color.lab(false) // [ 53.24079414130722, 80.09245959641109, 67.20319651585301 ]

// 其它颜色空间方法类似...
```

## color.rgb()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[r, g, b]`

## color.rgba()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[r, g, b, alpha]`

## color.cmyk()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[c, m, y, k]`

## color.hsl()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, l]`

## color.hsla()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, l, alpha]`

## color.hsv()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, v]`

## color.hsi()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, s, i]`

## color.hwb()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）返回整数，不保留小数
  - number: 自定义指定多少位小数

- **@return** 返回`[h, w, b]`

## color.xyz()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[x, y, z]`

## color.lab()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[l, a, b]`

## color.lch()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[l, c, h]`

## color.xyY()

- **@param** round: boolean | number
  - false: 不进行小数处理，返回所有小数位
  - true: （默认值）保留小数位数：2
  - number: 自定义指定多少位小数

- **@return** 返回`[x, y, Y]`

## color.hex()

- **@param** alphaFlag: 0 | 1 | 2
  - 0: 不展示alpha值，
  - 1：展示alpha值，
  - 2：(默认值)当alpha不等于100%才展示alpha

- **@return** 返回RGB十六进制字符串

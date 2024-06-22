# 色差 （deltaE）

color实例包含一个deltaE方法。可用于查询色差，其支持 `CMC(l:c)`, `CIE2000`, `CIE1994`, `CIE1976` 多种色差公式查询

```typescript
color.deltaE(sampleColor: Color, mode?: DeltaEMode, setting?: DeltaESetting) => number
```

注：当前颜色实例对象`color`为**标准色**，第一个参数`sampleColor`为**样品色**

参数说明：

- @param **sampleColor** 样品颜色
- @param **mode** 色差模式，即选用哪种公式计算色差，默认值为 `CMC`, 有以下几种可选： `CMC` | `CIE2000` | `CIE1994` | `CIE1976`
- @param **setting** 不同的色差公式有不同的系数可设置
  - **CMC**: `{ l: number, c: number }` 默认值为 `{ l: 1, c: 1 }`
  - **CIE2000**: `{ kL: number; kC: number; kH: number }` 默认值为 `{ kL: 1; kC: 1; kH: 1 }`
  - **CIE1994**:` { kL: number; kC: number; kH: number; cate: 'graphic' | 'textiles' } `默认值为 `{ kL: 1; kC: 1; kH: 1, cate: 'graphic' }`, 当 cate为`textiles`时，kL的值会变为2，无视设置

## CMC(l:c)色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CMC(1:1)公式
color1.deltaE(color2, 'CMC') // 5.754...
// 参数二默认为'CMC' 故可省略参数二
color1.deltaE(color2)

// CMC(2:1)公式, 只需把权重因子l设为2即可 (c默认为1)
color1.deltaE(color2, 'CMC', { l: 2 }) // 5.719...

```

:::tip
CMC（l:c）色差公式中，l表示明度加权值，调节明度的相对宽容量；c表示彩度加权值，调节彩度的相对宽容量。行业不同，可以通过调节l或c的值，调整明度和饱和度对总色差的影响程度。

- 在对色差的感知性进行评价时，推荐采用l:c  = 1: 1 ，如涂料、塑料行业。
- 在对色差的可接受性进行评价时，推荐采用l:c  = 2: 1 ，在纺织印染等行业对产品质量进行控制大多推荐采用 l:c  = 2: 1
:::

## CIE2000色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CIE2000公式
color1.deltaE(color2, 'CIE2000') // 3.6815...

// （效正系数，kL, kC, kH 默认值都为1）
color1.deltaE(color2, 'CIE2000', { kL: 1, kC: 1, kH: 1 })
```

## CIE1994色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CIE1994公式
color1.deltaE(color2, 'CIE1994') // 3.3725...

// （效正系数，kL, kC, kH 默认值都为1）
color1.deltaE(color2, 'CIE1994', { kL: 1, kC: 1, kH: 1 })

// 注：cate默认值为 'graphic'，即图像艺术（graphic arts）
// 如果用于进行织物评价，设置cate为'textiles'。
color1.deltaE(color2, 'CIE1994', { cate: 'textiles'})

```

:::tip
当 `{ cate: 'textiles' }` 时，系数 `kL`将无视自定义设置，自动变为2。
:::

## CIE1976色差查询

示例

```typescript
const color1 = colorsea.lab(80, 30, 120) // 标准色（参考色）
const color2 = colorsea.lab(79, 28, 100) // 样品色

// 使用CIE1976公式
color1.deltaE(color2, 'CIE1976') // 20.1246...

```

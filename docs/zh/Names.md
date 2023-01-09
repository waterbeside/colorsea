# 使用颜色名称

你可以通过颜色名称来创建Color实例，但必先通过 `colorsea.useName(colorNames)`方法来加载颜色名称的映射关系。
现支持`x11`颜色名、`中国传统色`、`日本传统色`

**示例1：** 基本用法

```typescript
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
// 载入X11颜色名
colorsea.useNames(x11)

// 此时你可以直接使用X11颜色名称来创建颜色
colorsea('Aqua') // color: #00ffff
colorsea('Aquamarine') // color: #7fffd4
```

<ColorBox box-color="#00ffff" text-color="#000">Aqua: #00ffff</ColorBox> - 
<ColorBox box-color="#7fffd4" text-color="#000">Aquamarine: #7fffd4</ColorBox>

**示例2：** 同时加载多种类型颜色名

```typescript
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
import chinese from 'colorsea/colors/chinese'
// 同时载入x11名称和中国传统色, 可链式操作
colorsea.useNames(x11).useNames(chinese)

colorsea('Beige') // color: #F5F5DC
colorsea('山梗紫') // color: #61649f
```

<ColorBox box-color="#F5F5DC" text-color="#000">Beige: #F5F5DC</ColorBox> - 
<ColorBox box-color="#61649f" text-color="#fff">山梗紫: #61649f</ColorBox>

**示例3：** 为颜色名称添加前缀

加载不同系列的颜色名称时，如果名称关键字有冲突，后加载的会覆盖前加载的。为此，可以统一格式化名称关键字，为关键字添加前缀，免受冲突影响。

`colorsea.useNames()` 方法的第二个参数可传入一个回调函数，此函数有两个参数`key`和`value`，对应颜色名称(key)和颜色值(value)，其必需返回一个包含处理后的`[key,value]`元组

```typescript
import colorsea from 'colorsea'
import chineseTr from 'colorsea/colors/chineseTr'
import nippon from 'colorsea/colors/nippon'
// 同时载入中国传统色(繁体), 和日本传统色
colorsea
  .useNames(chineseTr, (key, value) => [`zh:${key}`, value])
  .useNames(nippon, (key, value) => [`np:${key}`, value])

// 调用时需添加前缀
colorsea('zh:潮蓝') // color: #2983bb
colorsea('np:紺青') // color: #113285
```

<ColorBox box-color="#2983bb">潮蓝: #2983bb</ColorBox> - 
<ColorBox box-color="#113285">紺青: #113285</ColorBox>

## X11颜色

在 X Window System 上，颜色名称在一个简单的文本文件中表示，该文件将某些字符串映射到 RGB 颜色值。 它传统上随每个 X11 安装包一起提供，因此得名。
Web 颜色列表源自它，CSS3 已接纳了绝大部分X11颜色。

```typescript
// 载入
import colorsea from 'colorsea'
import x11 from 'colorsea/colors/x11'
colorsea.useNames(x11)
// 使用
colorsea('Aqua') // color: #00ffff
```

下表来自CSS3规范的web“X11颜色”列表

:::tip
- 更多关于X11颜色的介绍可参考：[https://en.wikipedia.org/wiki/X11_color_names](https://en.wikipedia.org/wiki/X11_color_names)

- 下表颜色名关键字来源于： [https://www.w3.org/TR/css-color-3/#svg-color](https://www.w3.org/TR/css-color-3/#svg-color)
:::

<X11List lang='zh' />

## 中国传统色

:::tip
中国传统色参考于： [http://zhongguose.com/](http://zhongguose.com/)

包含**简体中文**和**繁体中文**两个版本，请按需载入

- 简体中文：'colorsea/colors/chinese'
- 繁体中文：'colorsea/colors/chineseTr'
:::

```typescript{4}
// 载入
import colorsea from 'colorsea'
import chinese from 'colorsea/colors/chinese'
// 繁体中文版本请加载 'colorsea/colors/chineseTr'
// import chineseTr from 'colorsea/colors/chineseTr'
colorsea.useNames(chinese)
// 使用
colorsea('山梗紫') // color: #61649f
```

<ChineseColorList lang='zh' />

## 日本传统色 (Nippon colors)

:::tip
日本传统色参考于： [https://nipponcolors.com/](https://nipponcolors.com)

包含**汉字**和**罗马字**两个版本，请按需载入

- 汉字：'colorsea/colors/nippon'
- 罗马字：'colorsea/colors/nipponRm'
:::

```typescript{4}
// 载入
import colorsea from 'colorsea'
import nippon from 'colorsea/colors/nippon'
// 罗马字版本请加载 'colorsea/colors/nipponRm'
// import nipponRm from 'colorsea/colors/nipponRm'
colorsea.useNames(nippon)
// 使用
colorsea('桑染') // color: #64363C
```

<NipponColorList lang='zh' />

## 自定义颜色名

除了使用以上预设的颜色名外，你也可以自定义颜色名称，具体可参考以下示例

```typescript
import colorsea from 'colorsea'

// 定义一个对象，以`key: value`的形式存放`颜色名: 颜色值`的关系。
const myColorNames = {
  supperred: '#ff3333',
  almond: '#f7e8aa',
  milky: '#f9f4dc'
}

// 加载刚才自定义的颜色名
colorsea.useNames(myColorName)

// 使用
colorsea('milky') // color #f9f4dc

```

:::tip 注意
自定义颜色名时，其所有颜色名称的key都必需为小写。使用时，不区分大小写
:::

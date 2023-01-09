import { defineUserConfig, defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2"
import path from 'path'
import { fileURLToPath } from 'url'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
  // evergreen: true,
  base: '/colorsea/',
  plugins: [
    fullTextSearchPlugin,
    backToTopPlugin(),
    registerComponentsPlugin({
      components: {
        ColorBox: path.resolve(__dirname, './components/ColorBox.vue'),
        ColorNameItem: path.resolve(__dirname, './components/ColorNameItem.vue'),
        X11List: path.resolve(__dirname, './components/X11List.vue'),
        ChineseColorList: path.resolve(__dirname, './components/ChineseColorList.vue'),
        NipponColorList: path.resolve(__dirname, './components/NipponColorList.vue'),
      },
    }),
  ],
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'ColorSea',
      description: 'A simple color space conversion and color manipulation library'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'ColorSea',
      description: '简单的颜色空间转换和颜色操作库'
    }
  },
  theme: defaultTheme({
    repo: 'waterbeside/colorsea',
    // smoothScroll: true,
    locales: {
      '/': {
        // selectText: 'Languages',
        selectLanguageName: 'English',
        // label: 'English',
        // ariaLabel: 'Languages',
        // 显示所有（非活动页面）标题组成的链接
        // displayAllHeaders: false, // 默认值：false
        // 滚动操作是否改变标题链接的显示
        // activeHeaderLinks: true // 默认值：true
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        // // 多语言下拉菜单的标题
        // selectText: 'Languages',
        // // 该语言在下拉菜单中的标签
        // label: '简体中文'
      },

    }
  })
})
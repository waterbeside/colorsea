import { defineUserConfig, defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2"
import path from 'path'
import { fileURLToPath } from 'url'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
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
      title: 'COLORSEA',
      description: 'Colorsea.js is a simple color space conversion and color manipulation library'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'COLORSEA',
      description: 'colorsea.js - 简单轻量的颜色空间转换和颜色操作查询库'
    }
  },
  theme: defaultTheme({
    repo: 'waterbeside/colorsea',
    // smoothScroll: true,
    locales: {
      '/': {
        selectLanguageName: 'English',
        sidebar: [
          '/pages/About.md',
          '/pages/QuickStart.md',
          '/pages/CreateInstance.md',
          '/pages/Converting.md',
          '/pages/ColorOperation.md',
          '/pages/Value.md',
          '/pages/Diff.md',
          '/pages/Names.md',
        ]
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        sidebar: [
          '/zh/About.md',
          '/zh/QuickStart.md',
          '/zh/CreateInstance.md',
          '/zh/Converting.md',
          '/zh/ColorOperation.md',
          '/zh/Value.md',
          '/zh/Diff.md',
          '/zh/Names.md',
        ]
      },

    }
  })
})
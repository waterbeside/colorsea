import { defineConfig } from 'vuepress/config'

export default defineConfig({
  evergreen: true,
  base: '/colorsea/',
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
  themeConfig: {
    repo: 'waterbeside/colorsea',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        // 显示所有（非活动页面）标题组成的链接
        // displayAllHeaders: false, // 默认值：false
        // 滚动操作是否改变标题链接的显示
        activeHeaderLinks: true, // 默认值：true
        sidebar: [
          {
            title: 'About',
            path: '/about/'
          },
          {
            title: 'Quick start',
            path: '/quickStart/'
          },
          {
            title: 'Color operations',
            path: '/operate/'
          },
          {
            title: 'Color space',
            path: '/space/'
          }
        ]
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        sidebar: [
          {
            title: '介绍',
            path: '/about/'
          },
          {
            title: '快速上手',
            path: '/quickStart/'
          },
          {
            title: '颜色操作',
            path: '/operate/'
          },
          {
            title: '颜色空间',
            path: '/space/'
          }
        ]
      },

    }
  }
})
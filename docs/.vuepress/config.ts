import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: '我的博客',
  description: '思危，思退，思变',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '面试',
        link: '/interview/',
      },
    ],
    sidebar: [
      {
        text: '国企&央企',
        link: '/interview/',
        children: [
          '/interview/wukuang.md',
          '/interview/yiliao.md',
        ],
      }
    ],
  },
})
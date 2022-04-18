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
        text: '文章总结',
        link: '/summary/',
      },
      {
        text: '技能点',
        link: '/knowledge/',
      },
      {
        text: '面试经历',
        link: '/interview/',
      },
      {
        text: '读书笔记',
        link: '/notes/',
      },
      {
        text: '随笔',
        link: '/informal/',
      }
    ],
    sidebar: {
      '/interview/': [
        {
          text: '国企&央企',
          children: [
            '/interview/README.md',
            '/interview/wukuang.md',
            '/interview/yiliao.md',
          ],
        },
      ],
      '/knowledge/': [
        {
          text: 'JavaScript',
          children: [
            '/knowledge/README.md',
          ],
        },
        {
          text: 'CSS',
          children: [],
        },
        {
          text: 'Vue',
          children: [],
        },
        {
          text: '浏览器',
          children: [],
        },
        {
          text: '打包&构建',
          children: [],
        },
        {
          text: 'React',
          children: [],
        },
        {
          text: '结构与算法',
          children: [],
        }
      ]
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
})
module.exports = {
  // https://segmentfault.com/a/1190000016333850
  title: 'Aaron 技术博客',
  description: '胡庆的博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
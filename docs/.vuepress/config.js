module.exports = {
  // https://segmentfault.com/a/1190000016333850
  title: 'Aaron 技术博客',
  description: '胡庆的博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    // sidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '基础篇',
        items: [
          { text: 'HTML', link: '/blogs/html/html' },
          { text: 'CSS', link: '/blogs/css/css' }, 
          { text: 'JS', link: '/blogs/js/js'},
        ]
      },
      // { 
      //   text: '框架篇',
      //   items: [
      //     { text: 'Vue', link: 'https://github.com/OBKoro1' },
      //     { text: 'React', link: 'https://github.com/OBKoro1' },
      //     { text: '小程序', link: 'https://github.com/OBKoro1' },
      //     { text: 'Uni-app', link: 'https://github.com/OBKoro1' },
      //   ]
      // },
    ],
    sidebar: [
      {
        title: 'HTML',   // 必要的
        path: '/blogs/html',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/blogs/html/html',
          '/blogs/html/html'
        ]
      },
    ]
  }
}
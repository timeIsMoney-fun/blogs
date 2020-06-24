module.exports = {
  // https://segmentfault.com/a/1190000016333850
  title: "Aaron 技术博客",
  description: "胡庆的博客",
  base: '/hu/',
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    // sidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "基础篇",
        items: [
          { text: "HTML", link: "/blogs/html/html" },
          { text: "CSS", link: "/blogs/css/css" },
          { text: "JS", link: "/blogs/js/js" },
        ],
      },
      {
        text: "框架",
        items: [
          { text: "Vue", link: "/blogs/vue/vue" },
          { text: "React", link: "/blogs/react/react" },
          { text: "Webpack", link: "/blogs/webpack/Webpack" },
        ],
      },
      { text: "实战篇", link: "/blogs/combat/combat" },
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
        title: "HTML", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/blogs/html/html",
          "/blogs/html/htmly",
          "/blogs/html/newHtml5",
          "/blogs/html/htmli",
          "/blogs/html/htmlweb",
        ],
      },
      {
        title: "Css", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          "/blogs/css/css",
          "/blogs/css/css3",
          "/blogs/css/rem",
          "/blogs/css/xiang",
        ],
      },
      {
        title: "JS", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/js/js"],
      },
      {
        title: "WebAPI", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/webApi/webApi"],
      },
      {
        title: "Ajax", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/ajax/ajax"],
      },
      {
        title: "Webpack", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/webpack/webpack"],
      },
      {
        title: "Vue", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 4, // 可选的, 默认值是 1
        children: ["/blogs/vue/vue","/blogs/vue/vue1"],
      },
      {
        title: "React", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/react/react"],
      },
      {
        title: "小程序", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/mniprogram/mniprogram"],
      },
      {
        title: "Git", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/git/git"],
      },
      {
        title: "Node", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/node/node"],
      },
      {
        title: "数据库", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/blogs/sql/mysqlinstall","/blogs/sql/mysql"],
      },
      {
        title: "Nginx", // 必要的      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: ["/blogs/nginx/nginx"],
      },
    ],
  },
};

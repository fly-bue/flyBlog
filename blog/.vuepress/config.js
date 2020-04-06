module.exports = {
  title: 'Fly',
  description: 'fly_blog',
  theme: '@vuepress/theme-blog',
  // base: '/flyBlog/',
  // port: '8081',
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/img/fly.jpg',
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '博客',
        link: '/flyBlog/js/',
      },
      {
        text: 'github',
        link: 'https://github.com/fly-bue/flyBlog'
      }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/fly-bue',
        }
      ]
    },
  }
}

import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.200310.xyz",

  author: {
    name: "咕咚",
    url: "https://github.com/gydchenxiao",
  },

  iconAssets: "fontawesome-with-brands",
  logo: "/assets/images/gudong.png",
  repo: "gydchenxiao/gudongBlog",
  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // // 页脚
  // footer: `
  //   <div>
  //     <a href=" 政府证书" target="_blank"></a>
  //   </div>
  // `,
  // displayFooter: true,

  // 博客相关
  blog: {
    description: "喜欢web前端和网络,有时玩一些休闲小游戏",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/1760318943",
      GitHub: "https://github.com/gydchenxiao",
      Telegram: "https://t.me/gudongchenxiao",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页（帮助更改最好啦！！）",
  },

  // 启用的插件
  plugins: {
    // 在这里配置主题提供的插件

    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    comment: {
      provider: "Giscus",
      repo: "gydchenxiao/gudongBlog",
      repoId: "R_kgDOM30RAA",
      category: "Announcements",
      categoryId: "DIC_kwDOM30RAM4Ci1Hr",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    blog: true, // 将博客插件放在这里，避免重复定义
  },

  // Markdown 增强插件配置
  mdEnhance: {
    align: true,
    attrs: true,
    codetabs: true,
    component: true,
    demo: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
}); // 移除了分号，并且保持对象结束后的闭合括号

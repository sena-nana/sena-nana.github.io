import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "../main/sidebar";

export default hopeTheme({
  hostname: "https://sena-nana.github.io",
  author: {
    name: "星奈 Sena",
    url: "https://space.bilibili.com/82717585",
  },
  //pure:true,
  themeColor:{
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
  },
  backToTop:true,
  iconAssets: "iconfont",
  logo: "",
  repo: "sena-nana/sena-nana.github.io",
  docsDir: "demo/src",
  navbar: navbar,
  sidebar: sidebar,
  footer: "后面没有了哦~",
  displayFooter: true,
  //pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  pageInfo: [ "Tag", "ReadingTime","Word"],
  blog: {
    description: "一个不正经的 V",
    intro: "/intro.md",
    medias: {
      Bilibili: "https://space.bilibili.com/82717585",
      Notion: "https://senanana.notion.com",
      Github: "https://sena-nana.github.io",
    },
  },
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },
    git:{
      updatedTime: true,
      contributors:true,
      createdTime:false,
    },
    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置 !!!!!
    comment: {
      provider: "Giscus",
      repo: "sena-nana/sena-nana.github.io",
      repoId: "R_kgDOHodYrA",
      category: "Announcements",
      categoryId: "DIC_kwDOHodYrM4CQJHP",

    },
    
    photoSwipe:{
      
    },
    pwa:{
      showInstall: true,
    },
    sitemap:{},
    mdEnhance: {
      gfm:true,
      container:true,
      tabs:true,
      codetabs:true,
      align:true,
      tasklist:true,
      flowchart:true,
      stylize:[],
      presentation: false,
    },
  },
});

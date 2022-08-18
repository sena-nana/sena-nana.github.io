import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";

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
  logo: "QB.gif",
  repo: "sena-nana/sena-nana.github.io",
  docsDir: "demo/src",
  navbar: navbar,
  sidebar: {
    "/main/":"structure",
    "/story/":"structure",
  },
  footer: "后面没有了哦~",
  displayFooter: true,
  copyright:"MIT Licensed / CC-BY-NC-SA | Copyright © 2022-present 星奈 Sena",
  pageInfo: ["Author", "ReadingTime","Word"],
  blog: {
    description: "一个不正经的 V",
    intro: "/README.md",
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
    comment: {
      provider: "Giscus",
      repo: "sena-nana/sena-nana.github.io",
      repoId: "R_kgDOHodYrA",
      category: "Announcements",
      categoryId: "DIC_kwDOHodYrM4CQJHP",

    },
    photoSwipe:{},
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

import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "主规则书", 
    icon: "creative", 
    link: "/main/", 
  },
  { 
    text: "扩展规则", 
    icon: "creative", 
    link: "/", 
  },
  { 
    text: "模组", 
    icon: "creative", 
    link: "/story/", 
  },
  { 
    text: "骰娘说明书", 
    icon: "creative", 
    link: "https://sena-nana.github.io/mutsukidocs/", 
  },
  { 
    text: "数据库", 
    icon: "creative", 
    link: "/database/", 
  },
  { 
    text: "项目信息", 
    icon: "creative", 
    children: [
      "/updatelog.md",
      "/thanks.md",
      {
        text: "骰娘仓库", 
        icon: "creative", 
        link: "https://github.com/sena-nana/MutsukiBot", 
      },
      {
        text: "一版规则", 
        icon: "markdown", 
        link: "https://sena-nana.github.io/mh1/", 
      },
      {
        text: "官方群聊", 
        icon: "creative", 
        link: "https://jq.qq.com/?_wv=1027&k=LsRdMXNg", 
      },
      {
        text: "关于星奈", 
        icon: "creative", 
        link: "https://github.com/sena-nana", 
      },
    ],
  },
]);

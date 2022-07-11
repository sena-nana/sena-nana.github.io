import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "主规则书", 
    icon: "creative", 
    link: "/main/", 
    //children: [],
  },
  { 
    text: "玩家速成", 
    icon: "creative", 
    link: "/user/", 
    //children: [],
  },
  { 
    text: "扩展规则", 
    icon: "creative", 
    link: "/", 
    //children: [],
  },
  "/updatelog.md",
]);

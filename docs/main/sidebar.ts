import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/main/",
  {
    text: "游戏说明",
    icon: "note",
    prefix: "/main/游戏说明",
    collapsable: true,
    children: ["游戏流程","骰子","DLC规则"],
  },
]);

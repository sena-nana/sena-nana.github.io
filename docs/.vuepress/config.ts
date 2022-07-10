import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme";

export default defineUserConfig({
    lang: "zh-CN",
    title: "魔法崩坏",
    description: "一个泛魔法少女题材 TRPG 规则",
    base:"/",
  theme,
  shouldPrefetch: false
});

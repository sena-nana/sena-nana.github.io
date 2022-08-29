import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
    lang: "zh-CN",
    title: "魔法崩坏",
    description: "一个泛魔法少女题材 TRPG 规则",
    base:"/",
  theme,
  shouldPrefetch: false,
  plugins:[
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },},
      isSearchable: (page) => page.path !== '/',   
    }),
  ],
});

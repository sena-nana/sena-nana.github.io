import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/main/",
  {
    text: "第一章",
    icon: "note",
    prefix: "/main/1",
    children: ["第一节"],
  },
]);

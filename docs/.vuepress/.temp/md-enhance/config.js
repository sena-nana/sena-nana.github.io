import { defineClientConfig } from "@vuepress/client";
import Presentation from "D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.85/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.85/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});
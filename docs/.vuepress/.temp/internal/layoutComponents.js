import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.85/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.85/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Blog": defineAsyncComponent(() => import("D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.85/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}

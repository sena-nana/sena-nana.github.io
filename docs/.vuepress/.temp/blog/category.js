export const categoryMap = {"category":{"/":{"path":"/category/","map":{"主规则书":{"path":"/category/%E4%B8%BB%E8%A7%84%E5%88%99%E4%B9%A6/","keys":["v-14f0b23d"]},"模组":{"path":"/category/%E6%A8%A1%E7%BB%84/","keys":["v-6049ce16","v-d71d8bda"]}}}},"tag":{"/":{"path":"/tag/","map":{"Markdown":{"path":"/tag/markdown/","keys":["v-e0b9f640","v-32207f3f","v-4c3d7dae","v-093759d0","v-4e640cac","v-8ddf4aa4","v-735a3334","v-4e5378b9","v-24bb400e"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}

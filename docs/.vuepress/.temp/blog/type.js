export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-79fdd481","v-c7e971d2","v-444f99d2","v-14f0b23d","v-6049ce16","v-d71d8bda","v-e0b9f640","v-32207f3f","v-4c3d7dae","v-093759d0","v-a531d9fc","v-4e640cac","v-8ddf4aa4","v-735a3334","v-4e5378b9","v-0f509b64","v-24bb400e"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}

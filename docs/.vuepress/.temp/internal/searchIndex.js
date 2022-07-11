export const searchIndex = [
  {
    "title": "你在看哪里呢~",
    "headers": [],
    "path": "/home.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "主规则书",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "children": []
      }
    ],
    "path": "/main/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "第一节",
    "headers": [],
    "path": "/main/1/%E7%AC%AC%E4%B8%80%E8%8A%82.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "加密",
    "headers": [],
    "path": "/encrypted/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "幻灯片",
    "headers": [],
    "path": "/slide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "收藏",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用指南 分类",
    "headers": [],
    "path": "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Markdown 标签",
    "headers": [],
    "path": "/tag/markdown/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}

import comp from "C:/Users/gudong/Desktop/gudongBlog-master/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"咕咚的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"咕咚的博客\",\"heroImage\":false,\"bgImage\":\"https://pic.imgdb.cn/item/66f54b21f21886ccc0fb1487.jpg\",\"bgImageStyle\":{\"background-color\":\"rgba(255, 255, 255, 0.6)\",\"background-position\":\"center\",\"background-size\":\"cover\",\"background-repeat\":\"no-repeat\",\"filter\":\"opacity(1.0)\"},\"heroFullScreen\":true,\"taglineStyle\":{\"color\":\"whitesmoke\"},\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.200310.xyz/\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"咕咚的博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"咕咚\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"咕咚的博客\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.19,\"words\":57},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

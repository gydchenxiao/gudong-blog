export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"C语言":{"path":"/category/c%E8%AF%AD%E8%A8%80/","indexes":[0,1,2]}}}},"tag":{"/":{"path":"/tag/","map":{"Windows":{"path":"/tag/windows/","indexes":[0,1,2]},"Visual studio":{"path":"/tag/visual-studio/","indexes":[0,1,2]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });


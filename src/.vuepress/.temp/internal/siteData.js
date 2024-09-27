export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"咕咚的博客，喜欢web前端和网络相关的内容，希望可以有所帮助。\",\"head\":[[\"script\",{\"src\":\"https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js\",\"async\":true}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css\"}],[\"script\",{},\"\\n        document.addEventListener('DOMContentLoaded', function() {\\n          const giscusScript = document.createElement('script');\\n          giscusScript.src = 'https://giscus.app/client.js';\\n          giscusScript.async = true;\\n          giscusScript.crossOrigin = 'anonymous';\\n          giscusScript.setAttribute('data-repo', 'gydchenxiao/gudongBlog');\\n          giscusScript.setAttribute('data-repo-id', 'R_kgDOM30RAA');\\n          giscusScript.setAttribute('data-category', 'General');\\n          giscusScript.setAttribute('data-category-id', 'DIC_kwDOM30RAM4Ci1Hr');\\n          giscusScript.setAttribute('data-mapping', 'title');\\n          giscusScript.setAttribute('data-strict', '0');\\n          giscusScript.setAttribute('data-reactions-enabled', '1');\\n          giscusScript.setAttribute('data-emit-metadata', '0');\\n          giscusScript.setAttribute('data-input-position', 'bottom');\\n          giscusScript.setAttribute('data-theme', 'preferred_color_scheme');\\n          giscusScript.setAttribute('data-lang', 'zh-CN');\\n          document.getElementById('giscus-container').appendChild(giscusScript);\\n        });\\n      \"],[\"style\",{},\"\\n        /* CSS 来隐藏主页上的文章内容 */\\n        .home .post-preview .post-content {\\n          display: none;\\n        }\\n      \"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

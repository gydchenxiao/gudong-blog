export const redirects = JSON.parse("{\"/about.html\":\"/about\",\"/link.html\":\"/link\"}")

export const routes = Object.fromEntries([
  ["/about", { loader: () => import(/* webpackChunkName: "about.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/about.html.js"), meta: {"t":"作者介绍","i":"circle-info"} }],
  ["/link", { loader: () => import(/* webpackChunkName: "link.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/link.html.js"), meta: {"t":"友情链接"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"咕咚的博客","i":"home"} }],
  ["/%E6%96%87%E7%AB%A0/C%E8%AF%AD%E8%A8%80%E5%A4%8D%E4%B9%A01.html", { loader: () => import(/* webpackChunkName: "文章_C语言复习1.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/文章/C语言复习1.html.js"), meta: {"d":1727049600000,"l":"2024年9月23日","c":["C语言"],"g":["Windows","Visual studio"],"e":"\n<p><strong>复习会结合chatgpt,b站up主Micro_Frank的视频，菜鸟教程.遇到有疑问的代码，我会问问chatgdp.</strong></p>\n<p>以后忘了C语言也会看看日记。</p>\n<h2>1.C语言程序基本结构</h2>\n<div class=\"language-html line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"html\" data-title=\"html\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">#include &lt;</span><span style=\"--shiki-light:white;--shiki-dark:#E06C75\">stdio.h</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">int main(void) {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    int age;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    printf(\"Please input your age: \\n\");</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    scanf_s(\"%d\", &amp;age);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    if (age &gt;= 18) {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">        printf(\"成年!允许玩！ \\n\");</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    }</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    return 0;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">}</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":15.62,"words":4686},"t":"C语言基础类型","i":"pen-to-square","y":"a"} }],
  ["/%E6%96%87%E7%AB%A0/C%E8%AF%AD%E8%A8%80%E5%A4%8D%E4%B9%A02.html", { loader: () => import(/* webpackChunkName: "文章_C语言复习2.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/文章/C语言复习2.html.js"), meta: {"d":1727136000000,"l":"2024年9月24日","c":["C语言"],"g":["Windows","Visual studio"],"e":"\n<p>判断语句<br>\nC 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。</p>\n<p>语句 描述<br>\nif 语句 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。<br>\nif...else 语句 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。<br>\n嵌套 if 语句 可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句。<br>\nswitch 语句 一个 switch 语句允许测试一个变量等于多个值时的情况。<br>\n嵌套 switch 语句 可以在一个 switch 语句内使用另一个 switch 语句。</p>","r":{"minutes":7.57,"words":2272},"t":"C语言判断与循环","i":"pen-to-square","y":"a"} }],
  ["/%E6%96%87%E7%AB%A0/C%E8%AF%AD%E8%A8%80%E5%A4%8D%E4%B9%A03.html", { loader: () => import(/* webpackChunkName: "文章_C语言复习3.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/文章/C语言复习3.html.js"), meta: {"d":1727222400000,"l":"2024年9月25日","c":["C语言"],"g":["Windows","Visual studio"],"e":"\n<p>C 语言支持数组数据结构，它可以存储一个固定大小的相同类型元素的顺序集合。数组是用来存储一系列数据，但它往往被认为是一系列相同类型的变量。</p>\n<p>数组的声明并不是声明一个个单独的变量，比如 runoob0、runoob1、...、runoob99，而是声明一个数组变量，比如 runoob，然后使用 runoob[0]、runoob[1]、...、runoob[99] 来代表一个个单独的变量。</p>\n<p>所有的数组都是由连续的内存位置组成。最低的地址对应第一个元素，最高的地址对应最后一个元素。</p>\n<p><img src=\"https://blog.200310.xyz/usr/uploads/2024/02/2830112454.png\" alt=\"c-arrays-2021-1-18-3.png\" title=\"c-arrays-2021-1-18-3.png\"></p>","r":{"minutes":1.54,"words":463},"t":"C语言数组与指针","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/%E6%96%87%E7%AB%A0/", { loader: () => import(/* webpackChunkName: "文章_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/文章/index.html.js"), meta: {"t":"文章"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/c%E8%AF%AD%E8%A8%80/", { loader: () => import(/* webpackChunkName: "category_c语言_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/category/c语言/index.html.js"), meta: {"t":"C语言 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/windows/", { loader: () => import(/* webpackChunkName: "tag_windows_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/tag/windows/index.html.js"), meta: {"t":"标签: Windows","I":false} }],
  ["/tag/visual-studio/", { loader: () => import(/* webpackChunkName: "tag_visual-studio_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/tag/visual-studio/index.html.js"), meta: {"t":"标签: Visual studio","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/gudongBlog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

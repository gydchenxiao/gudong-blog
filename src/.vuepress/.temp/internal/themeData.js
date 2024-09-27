export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$bNA9tXvZWAh8kyDBwYojrOPte38x8AYLnl0lnnUkHrbZqNhocFeQq\"]}},\"author\":{\"name\":\"咕咚\",\"url\":\"https://github.com/gydchenxiao\"},\"logo\":\"/assets/images/gudong.png\",\"repo\":\"gydchenxiao/gudongBlog\",\"docsDir\":\"src\",\"blog\":{\"description\":\"喜欢web前端和网络,有时玩一些休闲小游戏\",\"intro\":\"/intro.html\",\"medias\":{\"BiliBili\":\"https://space.bilibili.com/1760318943\",\"GitHub\":\"https://github.com/gydchenxiao\",\"Telegram\":\"https://t.me/gudongchenxiao\"}},\"mdEnhance\":{\"align\":true,\"attrs\":true,\"codetabs\":true,\"component\":true,\"demo\":true,\"figure\":true,\"imgLazyload\":true,\"imgSize\":true,\"include\":true,\"mark\":true,\"plantuml\":true,\"spoiler\":true,\"stylize\":[{\"matcher\":\"Recommended\"}],\"sub\":true,\"sup\":true,\"tabs\":true,\"tasklist\":true,\"vPre\":true},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页（帮助更改最好啦！！）\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"星标\",\"empty\":\"$text 为空\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"咕咚的博客\",\"icon\":\"home\",\"link\":\"/\"},{\"text\":\"友情链接\",\"icon\":\"lightbulb\",\"link\":\"/link\"},{\"text\":\"关于作者\",\"icon\":\"circle-info\",\"link\":\"/about\"}],\"sidebar\":{\"/\":[\"\",{\"text\":\"文章\",\"icon\":\"book\",\"prefix\":\"文章/\",\"children\":\"structure\"},\"about\"]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

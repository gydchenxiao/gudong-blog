import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "C:/Users/gudong/Desktop/gudongBlog-master/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/gudong/Desktop/gudongBlog-master/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});

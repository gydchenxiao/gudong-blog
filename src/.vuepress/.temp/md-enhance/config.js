import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "D:/gudongBlog/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/gudongBlog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});

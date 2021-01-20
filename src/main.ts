import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/rem.scss";
import "@/styles/index.scss";
import "@/plugins/devide";

import { Lazyload, Image, Button } from "vant";

const app = createApp(App);
app.config.globalProperties.$sleep = (t = 1000, err: boolean) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (err) reject(err);
      else reslove(1);
    }, t);
  });
};

createApp(App)
  .use(store)
  .use(router)
  .use(Lazyload, {
    lazyComponent: true
  })
  .use(Image)
  .use(Button)
  .mount("#app");

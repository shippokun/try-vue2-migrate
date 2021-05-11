import VueCompositionAPI from "@vue/composition-api";
import Vue, { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { createStore } from "./store";

const store = createStore();

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

const app = createApp({
  router,
  ...App,
})
  .use(store)
  .mount("#app");

export default app;

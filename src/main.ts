import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (h: any) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh",
  messages: {
    zh: require("./assets/lang/zh.json"),
    en: require("./assets/lang/en.json")
  }
});

import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader

import axios from "axios";

axios.defaults.baseURL = "/";

Vue.prototype.$ajax = axios;

Vue.use(VueLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");

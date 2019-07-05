import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import http from "./http";
import "element-ui/lib/theme-chalk/index.css";
import VCharts from "v-charts"
import lodash from "lodash"
Vue.config.productionTip = false;
Vue.prototype.$lodash = lodash
Vue.use(ElementUI);
Vue.use(VCharts)
Vue.prototype.$axios = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

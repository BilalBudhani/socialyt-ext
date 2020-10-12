import Vue from "vue";
import App from "../App.vue";

Vue.config.productionTip = false;

const rootEl = document.createElement("div");
document.body.insertBefore(rootEl, document.body.firstChild);

new Vue({
  render: h => h(App)
}).$mount(rootEl);


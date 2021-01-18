import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.filter("toCurrency", function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");

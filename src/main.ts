import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NNavBar from "@/components/NavigBar.vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// import {
//   BButton,
//   BTable,
//   BContainer
// } from 'bootstrap-vue'
//
//
// Vue.component('b-container', BContainer)
// Vue.component('b-button', BButton)
// Vue.component('b-table', BTable)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  // components: {
  //   'NNavBar': NNavBar
  // }
}).$mount("#app");

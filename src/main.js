import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: () => ({}),
  created() {
    if (localStorage.getItem("cards")) {
      try {
        this.$store.state.cards = JSON.parse(localStorage.getItem("cards"));
      } catch (e) {
        localStorage.removeItem("cards");
      }
    }
  },
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    cards: [
      {
        id: 1,
        vendor: "bitcoin",
        number: "1111 1111 1111 1111",
        name: "MADOKA FUJIMAKI AHLSÈN",
        validMonth: "01",
        validYear: "25"
      },
      {
        id: 2,
        vendor: "ninja",
        number: "2222 2222 2222 2222",
        name: "MADOKA FUJIMAKI AHLSÈN",
        validMonth: "06",
        validYear: "16"
      },
      {
        id: 3,
        vendor: "blockchain",
        number: "3333 3333 3333 3333",
        name: "MADOKA FUJIMAKI AHLSÈN",
        validMonth: "11",
        validYear: "22"
      },
      {
        id: 4,
        vendor: "evil",
        number: "4444 4444 4444 4444",
        name: "MADOKA FUJIMAKI AHLSÈN",
        validMonth: "10",
        validYear: "31"
      }
    ]
  }),
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    addThisCard(state, card) {
      state.cards.push(card);
      const parsed = JSON.stringify(state.cards);
      localStorage.setItem("cards", parsed);
    },
    removeThisCard(state, card) {
      state.cards = state.cards.filter(c => c.id != card.id);
      const parsed = JSON.stringify(state.cards);
      localStorage.setItem("cards", parsed);
    }
  },
  actions: {
    addCard(context, card) {
      card.id = uuid.v4();
      context.commit("addThisCard", card);
    },

    removeCard(context, card) {
      context.commit("removeThisCard", card);
    }
  }
});

<template>
  <div class="home">
    <top pageTitle="E - WALLET" cardType="ACTIVE CARD" />
    <card v-bind:card="selectedCard" />
    <cardStack v-bind:cards="cards" v-on:selectCard="selectCard" />
    <router-link class="button" to="/add-card">ADD NEW CARD</router-link>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  components: {
    Top,
    Card,
    CardStack
  },
  props: ["newCard"],
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  },
  data: () => ({
    selectedCard: {
      id: 4,
      vendor: "evil",
      number: "4444 4444 4444 4444",
      name: "MADOKA FUJIMAKI AHLSÈN",
      validMonth: "10",
      validYear: "31"
    }
  }),
  mounted() {
    if (this.newCard) {
      this.newCard.id = this.cards.length + 1;
      this.cards.push(this.newCard);
      console.log(this.cards);
    }
  },
  methods: {
    selectCard(card) {
      this.selectedCard = card;
    }
  }
};
</script>
<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: 0.125rem solid #000;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 2rem 0;
}
</style>

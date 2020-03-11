<template>
  <div class="home">
    <top pageTitle="E - WALLET" cardType="ACTIVE CARD" />
    <card v-bind:card="selectedCard" />
    <button @click="removeCard">Remove</button>
    <cardStack v-on:selectCard="selectCard" />
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
  // props: ["newCard"],
  computed: {
    // selectedCard() {
    //   return this.$store.state.cards[
    //     this.$store.state.cards.findIndex(c => (c.id = this.activeCardId))
    //   ];
    // }
  },
  data: () => ({
    // activeCardId: 1
    selectedCard: {
      // id: 4,
      // vendor: "evil",
      // number: "4444 4444 4444 4444",
      // name: "MADOKA FUJIMAKI AHLSÈN",
      // validMonth: "10",
      // validYear: "31"
    }
  }),
  created() {
    this.selectedCard = this.$store.state.cards[0];
  },
  methods: {
    selectCard(card) {
      console.log(card);
      this.selectedCard = card;
    },
    removeCard() {
      this.$store.dispatch("removeCard", this.selectedCard);
      this.selectedCard = this.$store.state.cards[0];
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

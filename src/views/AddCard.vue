<template>
  <div class="add-card">
    <top pageTitle="ADD NEW CARD" cardType="NEW CARD" />
    <card v-bind:card="newCard" />
    <card-form v-model="newCard" />
    <button class="button" @click="addCard">ADD CARD</button>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  components: {
    Top,
    Card,
    CardForm
  },
  data: () => ({
    newCard: {
      vendor: "blank",
      number: "",
      name: "",
      validMonth: "MM",
      validYear: "YY"
    }
  }),
  methods: {
    async addCard() {
      console.log("running");
      if (this.newCard) {
        await this.$store.dispatch("addCard", this.newCard);
        this.$router.push("/");
      }
    }
  }
};
</script>

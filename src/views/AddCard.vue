<template>
  <div class="add-card">
    <top pageTitle="ADD NEW CARD" cardType="NEW CARD" />
    <card v-bind:card="newCard" />
    <card-form v-model="newCard" />
    <router-link class="button" :to="{ name: 'Home', params: { newCard } }"
      >ADD CARD</router-link
    >
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
  methods: {}
};
</script>

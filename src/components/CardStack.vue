<template>
  <div class="card-wrapp">
    <card
      v-for="card in cards"
      :key="card.id"
      v-bind:card="card"
      v-on:selectCard="$emit('selectCard', card)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  props: {
    cards: Array
  },
  data: () => ({}),
  methods: {}
};
</script>

<style>
.card-wrapp {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>

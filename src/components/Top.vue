<template>
  <header>
    <h1>{{ pageTitle }}</h1>
    <p>{{ cardType }}</p>
  </header>
</template>

<script>
export default {
  props: {
    pageTitle: String,
    cardType: String
  }
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
}
h1 {
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0;
  font-family: Source Sans Pro, sans-serif;
  margin: 0;
}
p {
  flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  padding: 0.25rem;
}
</style>

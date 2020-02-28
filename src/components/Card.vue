<template>
  <article v-bind:class="['card', vendor]" v-on:click="selectCard">
    <header>
      <img
        v-if="vendor != 'bitcoin'"
        class="chip"
        src="../assets/chip-light.svg"
        alt=""
      />
      <img v-else class="chip" src="../assets/chip-dark.svg" alt="" />
      <img
        v-if="vendor != 'blank'"
        class="logo"
        :src="require(`@/assets/vendor-${vendor}.svg`)"
        :alt="vendor"
      />
    </header>
    <section class="number">{{ updateCardNumber }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p>{{ card.name }}</p>
      </aside>
      <aside class="valid">
        <span>Valid until</span>
        <p>{{ card.validMonth }}/{{ card.validYear }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    card: Object
  },
  computed: {
    vendor() {
      return this.card.vendor;
    },
    updateCardNumber() {
      return this.card.number.toString().replace(/\d{4}/g, "$& ");
    }
  },
  data: () => ({}),
  methods: {
    selectCard() {
      this.$emit("selectCard", this.card);
    }
  }
};
</script>

<style lang="scss">
.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
  z-index: 9999;
}
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}
.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}
.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}
.blank {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}

header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  justify-content: space-between;
  align-items: flex-start;

  .chip {
    align-self: flex-end;
  }
  .logo {
    opacity: 0.8;
  }
}

.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}

.info {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  span {
    display: block;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0 0 0.25rem;
  }

  p {
    display: block;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  .holder {
    flex: 1;
  }

  .valid {
    text-align: right;
    display: block;
    text-transform: uppercase;
  }
}
</style>

<template>
  <div class="directions">
    <app-input-card></app-input-card>
    <div class="directions__from-store">
      <p
        class="directions__element"
        v-for="(card, index) in cards"
        :key="index"
      >
        <span class="directions__box">
          <span>{{ index + 1 }}. {{ card.name }} - </span>
          <span>{{ card.price }}$</span>
        </span>
        <img class="directions__img" :src="card.img" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { cardsMapper } from "@/store/cards";
import appInputCard from "../components/input-card";

export default Vue.extend({
  name: "Admin",
  components: {
    appInputCard,
  },
  data() {
    return {};
  },
  computed: {
    ...cardsMapper.mapGetters(["cards"]),
  },
});
</script>
<style lang="scss">
$color-nav: #2b4162;
$color-dark: #1d2d44;
$color-bgr: #f5f0f6;
$color-active: #385f71;
.directions {
  width: 100%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__from-store {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__element {
    height: 100px;
    width: 80%;
    max-width: 700px;
    border: 1px solid $color-active;
    padding: 1em;
    margin: 0.5em 0;
    display: flex;
    justify-content: space-between;
  }
  &__img {
    width: 100px;
  }
}
</style>
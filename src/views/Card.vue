<template>
  <div class="big-card">
    <div class="big-card__container">
      <h3 class="big-card__title">{{ card.name }}</h3>
      <div class="big-card__img-box">
        <img class="big-card__img" :src="card.img" />
      </div>
      <div>
        <span>Price for one person: </span>
        <span>{{ card.price }}$</span>
      </div>
      <div>
        <span>Current price: </span>
        <span>{{ sumPrice }}$</span>
      </div>
      <div class="big-card__btns">
        <button @click="decrement(card.name)">-</button>
        <span>{{ card.count }}</span>
        <button @click="incrementCount(card.name)">+</button>
      </div>
      <button @click="isModalOpen = true">Read documentation</button>
      <button @click="buyTrip(card)" :disabled="!isDocumentationRead">
        BUY
      </button>
    </div>

    <appModal
      v-if="isModalOpen"
      title="Read documentation"
      @closeModal="isModalOpen = false"
      @agree="
        isDocumentationRead = true;
        isModalOpen = false;
      "
      @disagree="
        isDocumentationRead = false;
        isModalOpen = false;
      "
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque
        nisi aperiam inventore. Accusamus dolorem praesentium commodi vel nulla
        eius?

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a
        harum, voluptatibus officiis ipsam fugit eius, earum esse aperiam,
        pariatur aliquid assumenda! Porro odio consectetur exercitationem esse
        neque, id eius asperiores, incidunt distinctio iure animi a pariatur
        nisi quia rerum voluptates ullam. Labore quam iste iure et modi, tempore
        nobis rem tenetur quos expedita, architecto dignissimos quod pariatur
        earum inventore. Maiores quibusdam modi aut molestias, quam
        exercitationem aspernatur soluta est laborum. Facilis quaerat itaque
        distinctio expedita doloremque quidem eaque ipsum iure cumque neque iste
        sapiente pariatur nisi earum, reiciendis exercitationem, assumenda
        facere, rerum similique laudantium totam dolor hic! Eligendi quos cumque
        provident atque ipsa quasi facilis, perferendis error at praesentium
        nulla beatae incidunt quaerat voluptas qui, exercitationem obcaecati
        consequuntur sint fugit doloribus eum porro? Ad deserunt cumque magnam.
        Impedit autem reprehenderit officiis, accusantium alias voluptatibus
        veniam modi et deleniti molestiae consequuntur vel repellendus odit!
        Recusandae maxime quibusdam itaque unde reprehenderit neque repellat,
        consequatur magni aliquam labore ipsa possimus qui expedita eaque quas
        dicta rerum ex similique laboriosam minima officiis! Adipisci, dolor
        tempora delectus placeat beatae minima tenetur tempore natus nobis
        magnam necessitatibus ducimus aliquam? Deserunt assumenda placeat
        inventore unde illo eaque magni quia nulla suscipit ipsum! Molestias ut
        odit fugit.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque
        nisi aperiam inventore. Accusamus dolorem praesentium commodi vel nulla
        eius?
      </p>
    </appModal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { store } from "../store";
import { ICard } from "../store/cards";
import { cardsMapper } from "../store/cards";
import { tripMapper } from "@/store/trips";
import appModal from "@/components/modal";

export default Vue.extend({
  name: "Card",
  components: {
    appModal,
  },
  store,
  data() {
    return {
      isModalOpen: false,
      isDocumentationRead: false,
    };
  },
  mounted() {
    console.log(this);
  },
  computed: {
    ...cardsMapper.mapGetters(["getCard"]),
    card(): ICard | undefined {
      return this.getCard(this.$route.params.name);
    },
    sumPrice(): number {
      if (this.card) {
        return this.card.count * this.card.price;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...cardsMapper.mapMutations([
      "incrementCount",
      "decrementCount",
      "zeroCount",
    ]),
    ...tripMapper.mapMutations(["addTrip"]),
    // incrementCount(name:string):void{
    //     this.incrementCount(name)
    // },
    decrement(name: string): void {
      if (this.card && this.card.count <= 0) {
        return;
      }
      this.decrementCount(name);
    },

    buyTrip(trip: ICard): void {
      if (trip.count > 0) {
        trip.date =
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString();
        this.addTrip(trip);
      }
      this.zeroCount(trip.name);
    },
  },
});
</script>
<style lang="scss">
$color-nav: #2b4162;
$color-dark: #1d2d44;
$color-bgr: #f5f0f6;
$color-active: #385f71;
.big-card {
  height: 92vh;
  min-width: 80vw;
  padding: 2em;

  color: $color-bgr;

  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: $color-dark;
    height: 25rem;
    padding: 1rem;
  }
  &__img {
    width: 300px;
  }
  &__btns {
    display: flex;
    justify-content: space-around;

    padding: 0 6rem;
  }
}
</style>
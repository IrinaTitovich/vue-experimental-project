<template>
  <div class="about">
    <h1 class="about__sum card">SUM: {{sum}}$</h1>
    <div class="about__container">
      <app-trip v-for="(trip,idx) in trips" :key="idx" :name="trip.name" :price="trip.price" :img="trip.img" :count="trip.count" :date="trip.date"></app-trip>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import appTrip from '../components/trip'
import {mapGetters} from 'vuex'

export default Vue.extend({
  components:{
    appTrip
  },
  data(){
      return{

      }
  },

  computed:{
    ...mapGetters({trips:'trips/trips'}),
    sum(){
      return this.trips.reduce((acc,item)=>{
      return acc+item.count*item.price
    },0)
    }
  },
  methods:{
    summ(count:number,price:number){
      console.log(this.sum)
      this.sum=Number(this.sum)+ Number(count)*Number(price)
    }
  }
})
</script>
<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;
.about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__sum{
    display: flex;
    justify-content: space-around;
    padding: 1rem 5rem;
  }
  &__container{
    display: flex;
  flex-wrap: wrap;
  }
}
</style>
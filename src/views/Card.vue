<template>
    <div class="big-card">
        <div class="big-card__container">

                <h3 class="big-card__title">{{card.name}}</h3>
                <div class="big-card__img-box">
                    <img class="big-card__img" :src="card.img" >
                </div>
                <div>
                    <span>Price for one person: </span>
                    <span>{{card.price}}$</span>
                </div>
                <div>
                    <span>Current price: </span>
                    <span>{{sumPrice}}$</span>
                </div>
                <div class="big-card__btns">
                    <button @click="decrement(card.name)">-</button>
                    <span>{{card.count}}</span>
                    <button @click="incrementCount(card.name)">+</button>
                </div>
                <button @click="buyTrip(card)">BUY</button>
            </div>

    
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {store} from '../store'
import {ICard}  from '../store/cards'
import {cardsMapper} from '../store/cards'
import { tripMapper } from '@/store/trips';


export default Vue.extend({
    name: 'Card',
    store,
    data(){
        return{
            
        }
    },
    mounted(){
        console.log(this)
    },
    computed:{
        ...cardsMapper.mapGetters(['getCard']),
        card():ICard|undefined{
            return this.getCard(this.$route.params.name)
        },
        sumPrice():number{
            if(this.card){
                return this.card.count*this.card.price
            } else{
                return 0
            }
        },
    },
    methods:{
        ...cardsMapper.mapMutations(['incrementCount','decrementCount','zeroCount']),
        ...tripMapper.mapMutations(['addTrip']),
        // incrementCount(name:string):void{
        //     this.incrementCount(name)
        // },
        decrement(name:string):void{
            if(this.card && this.card.count<=0){
                return
            }
            this.decrementCount(name)
        },
        buyTrip(trip:ICard):void{
            if(trip.count>0){
                trip.date=new Date().toLocaleDateString() + ' '+new Date().toLocaleTimeString()
                this.addTrip(trip)
            }
                this.zeroCount(trip.name)
        }

    }
});
</script>
<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;
.big-card{
    height: 92vh;
    min-width: 80vw;
    padding: 2em;

    color: $color-bgr ;

    display: flex;
    justify-content: center;

    &__container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: $color-dark;
        height: 25rem;
        padding: 1rem;
    }
    &__img{
        width: 300px;
    }
    &__btns{
        display: flex;
        justify-content: space-around;

        padding: 0 6rem;
    }
}

</style>
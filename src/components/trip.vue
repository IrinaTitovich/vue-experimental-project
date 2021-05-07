<template>
    <div class="trip-card">
        <div class="trip-card__container">
                <h3 class="trip-card__title">{{name}}</h3>
                <div class="trip-card__img-box">
                    <img class="trip-card__img" :src="img" >
                </div>
                <div>
                    <span>Price for one person: </span>
                    <span>{{price}}$</span>
                </div>
                <div>
                    <span>Current price for {{count}} person(s): </span>
                    <span>{{sumPrice}}$</span>
                </div>
                <div>
                    <span>date: {{date}} </span>

                </div>

            </div>


    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {store} from '../store'
import {ICard}  from '../store/cards'
import {mapMutations} from 'vuex'


export default Vue.extend({
    name: 'Trip',
    props:{
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        img:{
            type:String,
        },
        count:{
            type:Number,
            required:true
        },
        date:{
            type:String,
            required:true
        },
    },
    computed:{
        sumPrice():number{
            return this.count*this.price
        },
    }

});
</script>
<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;
.trip-card{

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
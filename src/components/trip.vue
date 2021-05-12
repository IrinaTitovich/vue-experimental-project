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
            default:'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.radionetplus.ru%2Fizobrazhenija%2Fkrasivye_kartinki%2F37441-krasivye-kartinki-na-rabochiy-stol-hochetsya-tepla-33-foto.html&psig=AOvVaw1k9H8ZnFe4uN1c7g_LUSDf&ust=1620726099469000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjrva3pvvACFQAAAAAdAAAAABAJ'
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
<template>
    <div class="cards">
        <app-input v-model="searchText"></app-input>

        <div class="cards__container" v-if="renderCards.length">
            
            <div class="cards__card card" v-for="( card, idx ) in renderCards" :key="idx">
                <h3 class="card__title">{{card.name}}</h3>
                <div class="card__img-box">
                    <img class="card__img"  :src="card.img" alt="">
                    <router-link 
                    :to="getLink(card.name)" 
                    class="card__img-cover">
                        <span >More Information...</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else class="card">
            Please, change your search
        </div>
    
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {store} from '../store'
import appInput from '../components/input'
import {ICard}  from '../store/cards'

export default Vue.extend({
    name: 'Cards',
    store,

    data(){
        return{
            searchText:''
            // renderCards:this.$store.state.cards.cards
        }
    },
    components: {
        appInput
    },
    methods:{
        console(){
            console.log()
        },
        filter(event:any){
            console.log(event)
        },
        getLink(name:string):string{
            return '/cards/'+name.toLowerCase()
        }
    },
    computed:{
        renderCards():ICard[]{
            return this.$store.state.cards.cards.filter(item=>item.name.toLowerCase().includes(this.searchText))
        }
    },
    
});
</script>
<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;
.cards{
    padding: 2rem;
    max-width: 100%;
    min-width: 80vw;
    // max-height: 80vh;
    // min-height: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__container{
        display: flex;
        flex-wrap: wrap;
    }
}
    .card{
        background-color: $color-nav;
            padding: 1em;
            margin: 1em;
            color: $color-bgr;
        &__img-box{
            width: 400px;
            height: 200px;
            position: relative;
        }
        &__img-cover{
            position: absolute;
            top: 0;
            width: 400px;
            height: 200px;
            background-color: rgba(14, 13, 13,0);
            

            display: flex;
            justify-content: center;
            align-items: center;
            transition: .2s;

            span{
                color:$color-bgr;
                opacity: 0;
            }
        }
        &__img-cover:hover{
            background-color: rgba(14, 13, 13,0.3);
            cursor: pointer;
                span{
                opacity: 1;
            }

        }
        &__img{
            width: 400px;
            height: 200px;

            object-fit: cover;
        }

    }
</style>
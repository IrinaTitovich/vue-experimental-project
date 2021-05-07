<template>
    <div class="search">
        {{search}}
        <input class="search__text" @input="$emit('input', $event.target.value)" type="text">
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {store} from '../store'


export default Vue.extend({
    name: 'Cards',
    store,
    model:{
        prop:'value',
        event:'input'
    },

    data(){
        return{
            renderCards:this.$store.state.cards.cards,
            search:''
        }
    },
})

</script>
<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;
.search{
    &__text{
        padding: 0.5em 1em;
        font-size: 1.2em;
    }

}
</style>
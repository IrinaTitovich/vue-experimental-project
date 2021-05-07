<template>
    <div class="editor">
        <h2> Editor </h2>
        <div class="editor__container">
            <div class="editor__img-container" :class="filters" >
                <img 
                v-show="filters.isVisible"  
                :style="imgStyles"
                class="editor__img" 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%D0%9C%D1%8B%D1%81_%D0%9B%D1%83%D0%B4%D0%B0%D1%80%D1%8C%2C_17_%D0%B8%D1%8E%D0%BD%D1%8F_2013_%D0%B3%D0%BE%D0%B4%D0%B0.jpg" alt="">
            </div>
            
            <div class="editor__functions">
                <div class="editor__btns">
                    <button class="button" :class="filters.isVisible?'active':''"  @click="filters.isVisible=!filters.isVisible">
                        <template v-if="!filters.isVisible">Show</template>
                        <template v-else>Hide</template>
                    </button>
                    <button class="button" :class="filters.border?'active':''" @click="filters.border=!filters.border">Borders</button>
                    <button class="button" :class="filters.shadow?'active':''" @click="filters.shadow=!filters.shadow">Shadow</button>
                    <button class="button" :class="filters.monochrome?'active':''" @click="filters.monochrome=!filters.monochrome">Monochrome</button>
                </div>
                <div class="editor__sizes">
                    <label class="editor__img-size" for="width">
                        width:{{imgSizes.currentWidth}}
                        <input 
                        type="range" 
                        id="width"
                        :min="imgSizes.minWidth"
                        :max="imgSizes.maxWidth"
                        :value="imgSizes.currentWidth"
                        @input="imgSizes.currentWidth = $event.target.value"
                        >
                    </label>
                    <label class="editor__img-size" for="height">
                        height:{{imgSizes.currentHeight}}
                        <input 
                        type="range" 
                        id="height"
                        :min="imgSizes.minHeight"
                        :max="imgSizes.maxHeight"
                        :value="imgSizes.currentHeigth"
                        @input="imgSizes.currentHeight = $event.target.value"
                        >
                    </label>
                    <label class="editor__img-size" for="rotate">
                        Degree:{{imgSizes.currentDegree}}
                        <input 
                        type="range" 
                        id="rotate"
                        :min="imgSizes.minDegree"
                        :max="imgSizes.maxDegree"
                        :value="imgSizes.currentDegree"
                        @input="imgSizes.currentDegree = $event.target.value"
                        >
                    </label>
                    
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';



export default Vue.extend({
    name: 'Main',
    data(){
        return{
            filters:{
                isVisible:true,
                border:true,
                shadow:true,
                monochrome:false
            },
            imgSizes:{
                currentWidth:200,
                currentHeight:225,
                currentDegree:0,
                maxWidth:300,
                maxHeight:225,
                maxDegree:360
            }
            
        }
    },
    computed:{
        imgStyles(){
            return {
                width:`${this.imgSizes.currentWidth}px`,
                height:`${this.imgSizes.currentHeight}px`,
                transform:`rotate(${this.imgSizes.currentDegree}deg)`
        }
        }
        
    }
});
</script>

<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;

.editor{
    padding: 2em;
    &__container{
        display: flex;
    }
    &__img{
        width: 300px;
    }
    &__img-container{
        border: 4px solid #fff;
        width: 308px;
        height:233px;
        background-color: $color-dark;
    }
    &__btns{
        padding: 1em;
        width: 300px;
        height: 90px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    &__sizes{
        padding: 1em;
        width: 300px;
        height: 250px;
        display: flex;
        flex-direction: column;

    }
    &__img-size{
        padding:1em 2em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.button{
    width: 6rem;
    margin: 0 1em;
    border: 1px solid $color-nav;
    background-color: $color-bgr;
}
.active{
    background-color: $color-dark;
    color:$color-bgr ;
}
.border{
    border: 4px solid rgb(53, 50, 50);
}
.shadow{
    box-shadow: 5px 5px 10px #000;
}
.monochrome{
    filter:grayscale(60%)
}

</style>

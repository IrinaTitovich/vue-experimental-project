<template>
  <div class="modal">
    <div class="modal__window">
      <header class="modal__header">
        <h3>{{ title }}</h3>
        <button @click="$emit('closeModal')">&#10006;</button>
      </header>
      <div 
      @scroll="onScroll($event.target)"
      ref="modalContent" 
      class="modal__content">
        <slot></slot>
      </div>
      <footer class="modal__footer">
        
      <button @click="$emit('agree')" 
      :disabled='!isInfRead'
      
      >I agree</button>
      <button @click="$emit('disagree')">I disagree</button>

        
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { store } from "../store";
import  onScroll  from "../mixin/scroll"

export default Vue.extend({
  name: "Cards",
  props:{
    title:{
      type:String,
      default:''
    },

  },
  store,

  data() {
    return {
      modal: false,
      information:{

    },
    isInfRead:false

    };
  },
  mixins:[onScroll],
  methods:{
    onScrollEnd(){
        this.isInfRead=true
    }
  }
});
</script>
<style lang="scss">
$color-nav: #2b4162;
$color-dark: #1d2d44;
$color-bgr: #f5f0f6;
$color-active: #385f71;
.modal {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba($color: $color-dark, $alpha: 0.7);
  color: $color-nav;

  display: flex;
  justify-content: center;
  align-items: center;

  &__window {
    padding: 2em;
    width: 90vw;
    min-width: 250px;
    max-width: 700px;
    height: 50vh;
    min-height: 200px;
    background-color: $color-bgr;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $color-nav;

    padding-bottom: 1em;
  }
  &__content {
    width: 100%;
    height: 70%;
    background-color: rgba($color: #fff, $alpha: 0.4);
    overflow-y: scroll;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
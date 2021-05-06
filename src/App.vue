<template>
  <div class="app" id="app">
    <app-header class="app__header" @toggle='toggled=!toggled'></app-header>
    <main class="app__content">
      <app-navigation v-show="toggled">
        <template v-slot:home>{{links.home}}</template>
        <span>{{links.main}}</span>
        <template v-slot:about>{{links.about}}</template>
      </app-navigation>
      <router-view />
    </main>

  </div>
</template>

<script>
import AppNavigation from "./components/navigation";
import AppHeader from "./components/header";

export default {
  data(){
    return {
      links:{
        home:'Home',
        main:'Main',
        about:'About'
      },
      toggled:false
    }
  },
  components: {
    AppNavigation,
    AppHeader
  },
  methods:{
    cl(){
      console.log('to')
    }
  }

};
</script>



<style lang="scss">
$color-nav:#2B4162;
$color-dark:#1d2d44;
$color-bgr:#F5F0F6;
$color-active:#385F71;

* {
  margin: 0;
  box-sizing: border-box;
  
  a{
    text-decoration: none;
  }
}

.app{
    margin: 0;
  background-color: $color-bgr;
  min-height: 100vh;
  &__header{
    background-color: $color-nav;
    border-bottom: 3px solid $color-dark;
  }
  &__content{
    display: flex;
  }
}

</style>

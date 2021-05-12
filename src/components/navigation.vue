<template>
  <nav class="nav" id="nav">
    <ul class="nav__list">
      <li class="nav__link-wrapper "> <router-link active-class class="nav__link" to="/"> <slot name="home"></slot> </router-link> </li>
      <li class="nav__link-wrapper"> <router-link active-class class="nav__link" to='/main'> <slot></slot> </router-link> </li>
      <li class="nav__link-wrapper"> <router-link active-class class="nav__link" to="/cards"> <slot name="cards"></slot> </router-link></li>
      <li class="nav__link-wrapper"
      @click='aditionalLink=!aditionalLink'
      >
        <router-link 
        active-class 
        class="nav__link" 
        to="/admin/add-direction"
        > 
        <slot name="admin"></slot>
        <span class="arrow" v-if="aditionalLink">&lt;</span>
        <span class="arrow" v-else>&gt;</span>
      </router-link></li>
      <li class="nav__link-wrapper">
        <router-link 
        active-class 
        class="nav__link nav__aditional-link" 
        to="/admin/reserved-trips"
        v-if='aditionalLink'
        > Reserved trips </router-link></li>
    </ul>
  </nav>
</template>

<script>


export default {
  data(){
    return{
      aditionalLink:false
    }
  },
  computed:{

  }
};
</script>

<style lang="scss">
$color-nav:#2B4162;
$color-bgr:#F5F0F6;
$color-active:#385F71;
$color-dark:#1d2d44;

.nav {
  min-height: 92vh;
  // width: 20vw;
  min-width: 250px;
  // max-width: 300px;
  border-right: 3px solid $color-dark;

  background-color: $color-nav;

  display: flex;
  justify-content: center;

  &__list{
    width: 100%;
  }
  &__link-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__link{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;
    text-transform: uppercase;
    font-weight: 600;

  }
  &__aditional-link{
    text-transform: lowercase;
    font-weight: 400;
  }
    &__active{
    background-color: $color-active;

  }


  ul {
    padding: 0;
    list-style: none;
  }
  a{
    color: $color-bgr;
  }
  .arrow{
    position: absolute;
    right: 1em;
    transform: rotate(270deg);
  }
}
.router-link-exact-active{
  background-color: $color-active;
}
</style>

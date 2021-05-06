<template>
  <nav class="nav" id="nav">
    <ul class="nav__list">
      <li class="nav__link-wrapper "> <router-link active-class class="nav__link" to="/"> <slot name="home"></slot> </router-link> </li>
      <li class="nav__link-wrapper"> <router-link active-class class="nav__link" to='/main'> <slot></slot> </router-link> </li>
      <li class="nav__link-wrapper"> <router-link active-class class="nav__link" to="/about"> <slot name="about"></slot> </router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-nav:#2B4162;
$color-bgr:#F5F0F6;
$color-active:#385F71;
$color-dark:#1d2d44;

.nav {
  height: 100vh;
  width: 20vw;
  min-width: 200px;
  max-width: 300px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;

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
}
.router-link-exact-active{
  background-color: $color-active;
}
</style>

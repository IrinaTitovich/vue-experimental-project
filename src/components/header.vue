<template>
    <header class="header" >
        <div class="header__box">
            <button class="btn" @click = '$emit("toggle")'>-</button>
        </div>
    
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .header{
        &__box{
            padding: 1em;
        }
    }
    .btn{

    }
</style>

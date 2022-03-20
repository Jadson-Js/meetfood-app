<template>
    <div class="l-hero">
        <AppHeaderHeroTitle />
    </div>
</template>

<script>
    import AppHeaderHeroTitle from './AppHeaderHeroTitle.vue'

export default {
    components: {
        AppHeaderHeroTitle
    }
}
</script>

<style scoped>
    .l-hero {
        height: 100vh;
        background: url("../../../assets/bg-vue.jpg") no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>
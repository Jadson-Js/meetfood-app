<template>
    <header>
        <AppHeaderNavbar />

        <router-view name="hero"></router-view>
    </header>
</template>

<script>
    import AppHeaderNavbar from './AppHeaderNavbar.vue'


    export default {
        components: {
            AppHeaderNavbar,
        }
    }
</script>

<style scoped>
</style>
<template>
  <AppHeader />

  <AppMain />

  <AppFooter />
</template>

<script>
  import AppHeader from "./components/Header/AppHeader.vue";
  import AppMain from "./components/Main/AppMain.vue";
  import AppFooter from "./components/Footer/AppFooter.vue";

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter
    }
  }
</script>

<style>
</style>
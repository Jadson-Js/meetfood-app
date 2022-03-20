<template>
  <section class="l-home">
    <AppMainHomeTitle />

    <AppMainHomeList />
  </section>
</template>

<script>
  import AppMainHomeTitle from './AppMainHomeTitle.vue'
  import AppMainHomeList from './AppMainHomeList.vue'

  export default {
    components: {
      AppMainHomeTitle,
      AppMainHomeList
    }
  }
</script>

<style scoped>
  .l-home {
    padding: 3em;
    background-color: rgba(53, 73, 94, .2);
  }
</style>
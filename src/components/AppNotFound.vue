<template>
    <div class="l-error  text-center">
        <h1>404 - PAGE NOT FOUND</h1>

        <router-link :to="{name: 'home'}" class="btn btn-outline-success">GO TO HOMEPAGE</router-link>
    </div>
</template>

<style scoped>
    .l-error {
        position: relative;
        top: 50vh;
    }

    .hero__title h1 {
        font-size: 3.5em;
        color: #35495e;
    }
</style>
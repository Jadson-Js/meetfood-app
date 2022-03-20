<template>
    <nav class="header__navbar navbar navbar-dark bg-dark d-flex justify-content-between">
        <h1 class="mx-2">
            <router-link class="navbar-brand" to="/">Front-end Model</router-link>
        </h1>



        <div v-if="getIsLogged == true">
            <router-link class="btn btn-sm btn-success me-4" :to="{name: 'perfil'}">Perfil</router-link>

            <button @click="changeLogout()" class="btn btn-sm btn-danger me-4">Logout</button>
        </div>

        <div v-else-if="getIsLogged == false">
            <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
        </div>

        <div v-else>
            <router-link class="nav-link" :to="{name: 'error'}">Algo de errado não está certo</router-link>
        </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters(['getIsLogged']),
        methods: mapActions(['changeLogout'])
    }
</script>

<style scoped>
    .header__navbar {
        width: 100%;
        position: fixed;
        z-index: 100;
    }
</style>
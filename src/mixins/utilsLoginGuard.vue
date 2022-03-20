<script>
    // IMPORTS TO MIXINS
    import { computed, watch } from 'vue'

    export default {
        
        created() {
            // COMPUTED = vai deixar o getter do store reativo
            const isLogged = computed(() => this.$store.getters.getIsLogged)

            // WATCH = Vai observar o isLogged e sempre q houver uma mudança, vai redirecionar o user
            watch(isLogged, () => this.$router.push({name: 'home'}))
        }
    }
</script>
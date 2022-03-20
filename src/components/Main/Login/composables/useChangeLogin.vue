<script>
    import store from '../../../../store/store'

    export default function useChangeLogin (data) {
        store.dispatch({
            type: 'changeLogin',
            value: data
        })
    }
</script>
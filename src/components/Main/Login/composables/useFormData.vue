<script>

    export default function useRedirect(formData) {
        let data = {}

        for (let [name, value] of formData) {
            data[name] = value
        }
        
        return { data }
    }
</script>
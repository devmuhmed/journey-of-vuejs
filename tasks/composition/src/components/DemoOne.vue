<template>
    <div>
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: 'DemoOne',
        setup() {
            let name = ref('Mohamed')
            // let name = 'Mohamed'
            setTimeout(()=>{
                name.value = 'Codevolution'
                console.log(name)
            },2000)
            return {
                name
            }
        }
    }
</script>

<style scoped>

</style>

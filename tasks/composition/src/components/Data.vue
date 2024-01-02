<template>
    <div>
        <h2>Options - {{ o_firstName }}</h2>
        <h2>Options - {{ c_firstName }}</h2>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name: 'DataComponent  ',
        setup() {
           const c_firstName = ref('Clark')
           return {
            c_firstName
           }
        },
        data() {
            return {
                o_firstName: 'Mohamed'
            } 
        }
    }
</script>

<style scoped>

</style>

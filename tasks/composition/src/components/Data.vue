<template>
    <div>
        <h2>Options - {{ o_firstName }}</h2>
        <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
        <hr>
        <h2>Composition - {{ c_firstName }}</h2>
        <h2>Composition - {{ greet }}</h2>
        <hr>
        <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
        <h2>Composition - {{ greetHero }}</h2>

    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name: 'DataComponent  ',
        setup() {
           const c_firstName = ref('Clark')
           const c_lastName = ref('Kent')
           const c_heroName = ref('Superman')
           c_firstName.value = 'Hassan'
           const greet = `Hello ${c_firstName.value}`
           const greetHero =`Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`
           return {
            c_firstName,
            greet,
            c_lastName,
            c_heroName,
            greetHero,

           }
        },
        data() {
            return {
                o_firstName: 'Mohamed',
                o_lastName: 'Abdallah',
                o_heroName: 'Ironman'
            } 
        }
    }
</script>

<style scoped>

</style>

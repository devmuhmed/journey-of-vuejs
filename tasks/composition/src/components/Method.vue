<template>
    <div>
        <h2> {{ name }} </h2>
        <button @click="setName"> Change Name </button>
        <hr>
        <h2>{{ count }}</h2>
        <button @click="incrementCount">Incerement Count</button>
        <hr>
        <h2>{{ firstName }} {{ lastName }}</h2>
        <button @click="changeHero">Change Hero</button>
    </div>
</template>

<script>
    import {ref, reactive,toRefs} from 'vue'
    export default {
        name: 'MethodComponent',
        setup() {
            const count = ref(0)
            function incrementCount() {
                count.value++
            }
            
            const state = reactive({
                firstName: 'Mohamed',
                lastName: 'Hassan'
            })
            function changeHero() {
                state.firstName = 'Hesham'
                state.lastName = 'Elsayad'
            }
            
            return {
                count,
                incrementCount,
                ...toRefs(state),
                changeHero
            }
        },
        data() {
            return {
                name: 'Mohamed',
            }
        },
        methods: {
            setName() {
                this.name = 'Codevolution'
            }
        }
    }
</script>

<style scoped>

</style>

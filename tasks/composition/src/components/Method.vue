<template>
    <div>
        <h2> {{ name }} </h2>
        <button @click="setName"> Change Name </button>
    </div>
</template>

<script>
    export default {
        name: 'MethodComponent',
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

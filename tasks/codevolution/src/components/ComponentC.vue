<template>
    <h2>Component c</h2>
    <ComponentE/>
</template>

<script>
    import ComponentE from './ComponentE.vue';
    export default {
        name: 'ComponentC',
        components: {
            ComponentE,
        }
    }
</script>

<style scoped>

</style>

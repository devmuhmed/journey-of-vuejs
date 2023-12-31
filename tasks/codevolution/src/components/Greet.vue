<template>
    <h2>Hello {{ name ?? 'mohamed' }} a.k.a {{ heroName }}</h2>
</template>

<script>
export default {
    name: 'GreetApp',
    props: ['name', 'heroName']
}
</script>
 
<style scoped>
</style>

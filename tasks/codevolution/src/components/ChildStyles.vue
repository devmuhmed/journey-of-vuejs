<template>
    <div>
        <slot></slot>
        <!-- when using slots the parent components styles are applied and not the child component styles even though the content is embedded inside the child component -->
    </div>
</template>

<script>
    export default {
        name: 'ChildStyles'
    }
</script>

<style scoped>
h4 {
    color:olive;
}
</style>

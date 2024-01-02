<template>
    <div>
        <h2 @mouseover="increamentCount">Hovered {{ count }} times</h2>
    </div>
</template>

<script>
    export default {
        name: 'HoverCounter',
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increamentCount()
            {
                this.count += 1
            }
        }
    }
</script>

<style scoped>

</style>

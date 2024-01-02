<template>
    <div>
        <button @click="increamentCount">Clicked {{ count }} times</button>
    </div>
</template>

<script>
    export default {
        name: 'ClickCounter',
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

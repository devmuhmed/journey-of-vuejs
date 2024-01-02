<template>
    <h3 v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
</template>

<script>
    export default {
        name: 'NameList',
        data() {
            return {
                names: [
                    {
                        firstName: 'Mohamed',
                        lastName: 'Hassan',
                    },
                    {
                        firstName: 'Ibrahim',
                        lastName: 'Abdallah',
                    },
                    {
                        firstName: 'Yousef',
                        lastName: 'Ibrahim',
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>

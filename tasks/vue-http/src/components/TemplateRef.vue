<template>
    <div>
        <input type="text" ref="inputRef" />
        <post-list ref="postListRef"></post-list>
    </div>
</template>

<script>
    import PostList from './PostList.vue';
    export default {
        name: 'TemplateRef',
        components:{
            PostList
        },
        mounted() {
            console.log(this.$refs.postListRef)
            this.$refs.inputRef.focus()
        }
    }
</script>

<style scoped>

</style>

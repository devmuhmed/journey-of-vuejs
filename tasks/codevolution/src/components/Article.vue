<template>
    <div>
        <h2>Article Component</h2>
        <h2>{{ title }}</h2>
        <h2> Likes - {{ likes }}</h2>
        <h2> Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'ArticleApp', 
        props: {
            // title: String,
            title: {
                type: String,
                required: true,
                default: 'Article default title',
            },
            likes: Number,
            isPublished: Boolean,
        }
    }
</script>

<style scoped>

</style>

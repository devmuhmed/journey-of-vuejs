<template>
  <hover-counter></hover-counter>
  <click-counter></click-counter>
  <template-ref> </template-ref>
  <post-list></post-list>
  <create-post></create-post>
</template>

<script>
import HoverCounter from './components/HoverCounter.vue';
import TemplateRef from './components/TemplateRef.vue';
import ClickCounter from './components/ClickCounter.vue';
import PostList from './components/PostList.vue'
import CreatePost from './components/CreatePost.vue'
export default {
  name: 'App',
  components: {
    PostList,
    CreatePost,
    TemplateRef,
    ClickCounter,
    HoverCounter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

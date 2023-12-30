<template>
  {{ greet }} {{ name }}
  <div v-text="channel"></div>
  <div v-html="test"></div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      greet: 'hello',
      name:'Mohamed',
      channel: 'codevolution',
      test: '<b>test</b>'
    }
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

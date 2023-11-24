<template>
  <page-header 
  title="Give me advice"
  text="Provide a number and get apiece of advice"></page-header>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
@import './assets/css/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

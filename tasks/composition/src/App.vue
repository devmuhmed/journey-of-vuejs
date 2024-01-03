<template>
  <demo-one />
  <demo-two/>
  <!-- <data-component/> -->
</template>

<script>
import DemoOne from './components/DemoOne.vue';
import DemoTwo from './components/DemoTwo.vue';
// import DataComponent from './components/Data.vue'

export default {
  name: 'App',
  components: {
    DemoOne,
    DemoTwo
    // DataComponent
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

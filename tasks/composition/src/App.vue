<template>
  <v-model/>
  <!-- <method-component/> -->
  <!-- <demo-one />
  <demo-two/> -->
  <!-- <data-component/> -->
</template>

<script>
import VModel from './components/VModel.vue';
// import DemoOne from './components/DemoOne.vue';
// import DemoTwo from './components/DemoTwo.vue';
// import DataComponent from './components/Data.vue'
// import MethodComponent from './components/Method.vue';
export default {
  name: 'App',
  components: {
    VModel
    // MethodComponent
    // DemoOne,
    // DemoTwo
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

<template>
    <greet-app></greet-app>
  </template>
  
  <script>
  import GreetApp from './components/Greet.vue'
  
  export default {
    name: 'App',
    components: {
        GreetApp,
    },
    data() {
      return {
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
  
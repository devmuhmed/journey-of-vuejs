<template>
    <greet-app></greet-app>
    <greet-app name="Bruce" heroName="Batman"/>
    <greet-app name="Clark" hero-name="Superman"/>
    <greet-app name="Diana" hero-name="Wonder Woman"/>
    <greet-app :name="name" :hero-name="channel"/>
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
        name: 'mohamed',
        channel: 'GoodHassan'
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
  
<template>
    <h3>AppComponent username {{ name }}</h3>
    <component-c/>
</template>
  
<script>
    import ComponentC from './components/ComponentC.vue';
  export default {
    name: 'App',
    components: {
        ComponentC,
    },
    data() {
      return {
            name: 'Mohamed',
        }
    },
    provide() {
        return {
            username: this.name,
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
  
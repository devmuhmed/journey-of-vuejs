<template>
    <h4>App component text</h4>
    <child-styles>
        <h4>Childstyles component text</h4>
    </child-styles>
</template>

<script>
    import ChildStyles from './components/ChildStyles.vue';
    export default {
        name: 'App',
        components: {
            ChildStyles,
        },
        data() {
            return {
            }
        },
    }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h4 {
    color:orange;
}
</style>

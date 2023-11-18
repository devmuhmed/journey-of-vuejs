<template>
    <page-header title = "myquotes" text="welcome to out website"></page-header>
    <div class="quotes">
      <single-quote text="you can do it"></single-quote>
      <single-quote text="you are good"></single-quote>
      <single-quote text="well done"></single-quote>
    </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import SingleQuote from './components/SingleQuote.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    SingleQuote
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6, p {
  margin-bottom: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.quotes {
  max-width: 80%;
  margin: 1rem auto;
}
</style>

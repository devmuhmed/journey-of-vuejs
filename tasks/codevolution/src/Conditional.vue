<template>
    <h2 v-if="num === 0">The number is zero</h2>
    <h2 v-else-if="num < 0 ">The number is negative</h2>
    <h2 v-else-if="num > 0">The number is Positive</h2>
    <h2 v-else> Not a number </h2>

    //invisible div wraper
    <template v-if="display">
        <h2>Mohamed</h2>
        <h2>Ibrahim</h2>
        <h2>Hassan</h2>
    </template>

    <div v-if="display">
        <h2>Mohamed</h2>
        <h2>Ibrahim</h2>
        <h2>Hassan</h2>
    </div>
</template>

<script>
export default {
    name: 'ConditionalApp',
    data() {
        return {
            num: 'helo',
            display: true,
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

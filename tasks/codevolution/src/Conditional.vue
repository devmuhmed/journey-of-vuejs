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
    <!-- the display properity of css is toggling v-show recommended to use because it's not expensive dom cost  -->
    <h2 v-show="showElement">using v-show</h2>
    
    <!-- v-if will mount the element in the dom and remove the element from the dom if it false  that's differance between v-show and v-if -->
    <h2 v-if="showElement">using v-show</h2>
</template>

<script>
export default {
    name: 'ConditionalApp',
    data() {
        return {
            num: 'helo',
            display: true,
            showElement:false,
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

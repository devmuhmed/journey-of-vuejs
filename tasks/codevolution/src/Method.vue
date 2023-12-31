<template>
    <h2>
        {{ 2+3+5 }}
    </h2>
    <h2>
        {{ 5+10+15 }}
    </h2>
    <h2> Add method - {{ add(2,3,5) }}</h2>
    <h2> Add method - {{ add(10,15,20) }}</h2>
    <h2> Multiplier method - {{ multiply(10) }}</h2>
</template>


<script>
export default {
    name: 'MethodApp',
    data() {
        return{
            baseMultiplier: 5
        }
    },
    methods: {
        //never using arrow function at methods cause of this key word
        add(a, b, c){
            return a + b + c 
        },
        multiply(num){
            return num * this.baseMultiplier
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

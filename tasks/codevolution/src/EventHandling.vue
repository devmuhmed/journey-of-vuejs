<template>
    <h2>{{ name }}</h2>
    <div>
        <button @click="changeName($event), increment(1,$event)">Change Name</button>
    </div>

    <h2>{{ count }}</h2>
    <div>
        <button @click="increment(1,$event)">Increment 1</button>
        <button @click="increment(5)">Increment 5</button>
        <button @click="decrement(1)">decrement 1</button>
        <button @click="decrement(5)">decrement 5</button>
    </div>
</template>


<script>
export default {
    name: 'EventHandling',
    data() {
        return{
            name: 'Mohamed',
            count: 0,
        }
    },
    methods: {  
        changeName(event) {
            this.name = 'batman'
            console.log('Event',event);
        },
        increment(num,event){
            this.count += num
            console.log('Event',event)
        },
        decrement(num){
            this.count -= num
        },
    },
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

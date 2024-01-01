<template>
    <!-- <input type="text" v-model="name"> -->
    <input-component v-model="name"/>
    <!-- <card-component content="Card Content 1"/>
    <card-component content="Card Content 2"/> -->
    <card-component></card-component>
    <card-component>
        Card Content
    </card-component>
    <card-component>
        <h2>Card Content</h2>
    </card-component>
    <card-component>
        <img src="https://picsum.photos/200">
    </card-component>
    
    <card-component>
        <template v-slot:header>
            <h3>Header</h3>
        </template>
        <template v-slot:default>
            <img src="https://picsum.photos/200">        
        </template>
        <template v-slot:footer>
            <button>View Details</button>
        </template>
    </card-component>
    
</template>

<script>
    import CardComponent from './components/Card.vue';
    import InputComponent from './components/input.vue'
    export default {
        name: 'App',
        components: {
            InputComponent,
            CardComponent
        },
        data() {
            return {
                name: ''
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
</style>

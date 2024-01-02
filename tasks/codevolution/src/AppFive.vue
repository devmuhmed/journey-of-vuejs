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
    <name-list>
        <!-- slotProps represent all object of the children -->
       <template v-slot:default="slotProps">
            {{ slotProps.firstName }} {{ slotProps.lastName }}
       </template> 
    </name-list>
    <name-list>
       <template v-slot:default="slotProps">
            {{ slotProps.firstName }}, {{ slotProps.lastName }}
       </template> 
    </name-list>
    <name-list>
       <template v-slot:default="slotProps">
            {{ slotProps.firstName }}
       </template> 
    </name-list>
</template>

<script>
    import NameList from './components/NameList.vue';
    import CardComponent from './components/Card.vue';
    import InputComponent from './components/input.vue'
    export default {
        name: 'App',
        components: {
            InputComponent,
            CardComponent,
            NameList
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
</style>

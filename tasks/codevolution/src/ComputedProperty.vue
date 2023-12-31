<template>
    <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
    <h2>Computed fullname - {{ fullName }}</h2>
    <button @click="items.push({id:4, title:'keyboard', price: 50})">Add item</button>
    <h2>
        Computed Total - {{ total }}
    </h2>
    <h2>
        Method Total - {{ getTotal() }}
    </h2>
    <input type="text" v-model="country">

    <template v-for="item in items" :key="item.id">
        <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
    </template>
        <h2 v-for="item in expensiveItems" :key="item.id">
        {{ item.title }} {{ item.price }}
        </h2>
</template>

<script>
 export default{
    name: 'ComputedProperty',
    data() {
        return{
            firstName: 'Mohamed',
            lastName: 'Hassan',
            items: [
                {
                    id:1,
                    title: 'TV',
                    price: 100,
                },
                {
                    id:2,
                    title: 'Phone',
                    price: 200,
                },
                {
                    id:3,
                    title: 'Laptop',
                    price: 300,
                }
            ],
            country:''
        }
    },
    methods: {
        getTotal() {
            console.log('getTotal Method')
            return this.items.reduce((total, curr) => (total += curr.price ),0)
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        total(){
            console.log('Total Computed')
            return this.items.reduce((total, curr) => (total += curr.price ),0)
        },
        expensiveItems() {
            return this.items.filter( item => item.price > 100)
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

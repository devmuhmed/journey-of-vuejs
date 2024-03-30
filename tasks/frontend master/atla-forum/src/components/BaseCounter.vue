<script>

export default {
    data: () => ({
        count: 10,
        counterTitle:'Counter Standard',
        increamentAmount: 8,
        message: 'Hello it works!',
        listOfNumbers: [1, 2, 3, 4, 5]
    }),

    computed: {
        displayTitle() {
            return this.count > 20 ? 'Counter Standard - Very Long' : 'Counter Standard'
        },
        optimizedIncrementAmount() {
            return this.displayTitle.length * this.increamentAmount
        },
    },

    methods: {
        increamentCount(newAmount, event) {
            // this.$data.count
            console.log(newAmount)
            console.log(event)
            this.count += this.optimizedIncrementAmount
        }
    },
        
}
</script>
<template>
    <h1>{{ displayTitle }}</h1>
    <p :data-inecrement-by="increamentAmount">{{ count }}</p>
    <button @click="increamentCount(10, $event)">Increment Count</button>
    <h1> {{ increamentAmount }}</h1>
    <p>{{ optimizedIncrementAmount }}</p>
    <label for="increamentAmount">Increment by:</label>
    <input type="number" v-model="increamentAmount">
    <hr>
</template>

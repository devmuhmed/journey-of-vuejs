<script>
  export default {
    data() {
                return {
                    count: 10,
                    counterTitle:'Counter Standard',
                    increamentAmount: 8,
                    message: 'Hello it works!',
                    listOfNumbers: [1, 2, 3, 4, 5]
                }
            },
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
            // watch old value and watch a new value
            watch: {
                count(newValue) {
                    if(newValue > 20) {
                        this.counterTitle += 'Very Long'
                    }
                    console.log(newValue)
                }
            }
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

        <!-- v-if directive -->
        <p v-if="message.length % 2 === 0">
            Even: {{ message }}
        </p>
        <p v-else>
            Odd: {{ message.toUpperCase() }}
        </p>
        <!-- show list render -->

        <!-- without that identifier, you basically run the risk of relying solely on the data to figure out what's working and when  -->
        <ul>
            <li v-for="(number, index) in listOfNumbers" :key="`item-${index}`"> {{ number * Math.random() }}</li>
        </ul>
</template>

<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li 
            v-for="transaction in transactions" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'"
        >
            {{ transaction.text }} <span>{{ transaction.amount < 0 ? '-' : '' }} ${{ Math.abs(transaction.amount) }}</span>
            <button class="delete-btn">X</button>
        </li>
    </ul>
</template>

<script>
    export default {
        setup(){
            const transactions = [
                {id:1 , text: 'Flower', amount: -19.99},
                {id:1 , text: 'Salary', amount: 299.97},
                {id:1 , text: 'Book', amount: -10},
                {id:1 , text: 'Camera', amount: 150},
            ];

            return {
                transactions,
            }
        }
    }
</script>

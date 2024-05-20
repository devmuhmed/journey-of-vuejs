<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpense :income="income" :expense="expense"/>
    <TransactionList :transactions="transactions"/>
    <AddTransaction />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Balance from '@/components/Balance.vue'
  import IncomeExpense from '@/components/IncomeExpense.vue';
  import TransactionList from '@/components/TransactionList.vue';
  import AddTransaction from '@/components/AddTransaction.vue';
  import {ref, computed} from 'vue';


  const transactions = ref([
        {id:1 , text: 'Flower', amount: -19.99},
        {id:1 , text: 'Salary', amount: 299.97},
        {id:1 , text: 'Book', amount: -10},
        {id:1 , text: 'Camera', amount: 150},
    ]);

  //Get total balance
  const total = computed(()=> {
    return transactions.value.reduce((acc, transaction)=>{
      return acc + transaction.amount
    }, 0) 
  })

    //Get income
    const income = computed(()=> {
      return parseInt(transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction)=>{
        return acc + transaction.amount
      }, 0).toFixed(2))
    })

    //Get expense
    const expense = computed(()=> {
      return parseInt(transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction)=>{
        return acc + transaction.amount
      }, 0).toFixed(2))
    })
</script>

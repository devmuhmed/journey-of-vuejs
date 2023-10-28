let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})

vm.amount('#app')

// setTimeout(() => {
//   vm.amount('#app')
// },3000)

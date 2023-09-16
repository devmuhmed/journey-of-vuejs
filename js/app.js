const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Hassan',
        }
    }
}).mount('#app1')

// Accessing the insatance data
// with aproxy
setTimeout(()=> {
    // proxy
    vm.firstName = 'Muhamed'
    // without proxy
    vm.$data.lastName = 'Ibrahim'
},2000)

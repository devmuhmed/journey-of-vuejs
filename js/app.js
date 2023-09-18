const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Hassan',
            url: 'https://www.google.com',
            raw_url: '<a href="https://www.google.com" target="_blank">Home</a>'
        }
    },
    methods: {
        fullName() {
            return this.firstName +" " + this.lastName.toUpperCase() 
            //or return `${firstName} ${lastName.toUpperCase()}` 
        }   
    }
}).mount('#app1')

// Accessing the insatance data
// with aproxy
// setTimeout(()=> {
//     // proxy
//     vm.firstName = 'Muhamed'
//     // without proxy
//     vm.$data.lastName = 'Ibrahim'
// },2000)

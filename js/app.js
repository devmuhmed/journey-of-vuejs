const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Hassan',
            url: 'https://www.google.com',
            raw_url: '<a href="https://www.google.com" target="_blank">Home</a>',
            age: 20,
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(message, event){
            // console.log(message) 
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed property was called')
            return this.firstName +" "+ this.middleName + " " + this.lastName.toUpperCase() 
            // return `${firstName} ${middleName} ${lastName.toUpperCase()}` 
        },
    },
    watch: {
        age (newVal, oldVal){
            setTimeout(() => {
                this.age = 20
            },2000)
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

const lastNameAbove = 'Done'
// to make this line render at app should adding to app

Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastNameDirect: 'Hassan',
            lastName: lastNameAbove,
            // comment above and give it directly
        }
    }
}).mount('#app')

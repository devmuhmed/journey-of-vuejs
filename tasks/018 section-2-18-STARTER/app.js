let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
        }
    },
    computed: {
        circleClass(){
            return { purple: this.isPurple }
        }
    }
}).mount('#app')

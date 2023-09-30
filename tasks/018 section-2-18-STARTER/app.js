let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectColor: ''
        }
    },
    computed: {
        circleClass(){
            return { purple: this.isPurple }
        }
    }
}).mount('#app')

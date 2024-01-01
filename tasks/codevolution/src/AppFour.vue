<template>
    <button @click="showPopup = true">show Popup</button>
    <pop-up v-show="showPopup" @close="closePopup"/>
</template>

<script>
import PopUp from './components/Popup.vue'
    export default {
        name: 'App',
        components: {
            PopUp,
        },
        data() {
            return {
                showPopup:false
            }
        },

        methods: {
            closePopup(name){
                this.showPopup = false
                console.log('name', name)
            }
        }
    }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  // The very first hook is the before create hook
  // This hook is called before the vue instance is initialized
  // At this moment we won't have access to the data because vue hasn't created the proxy methods
  // The instance will not be reactive  
  beforeCreate() {
    console.log('beforeCreate() function called', this.message ?? 0)
    //undefined this is because the data property hasn't been proxy yet 
  },
  // The next lifecycle is created hook   
  // This hook will be set to a function All life cycle are functions  
  created() {
    console.log('created() function called', this.message ?? 0)
  },
  beforeMount() {
    // $el: its value will be the element viewers mounted to 
    // It's avaliable once vue has been mounted
    // you'll be able to see the value once we run the code 
    console.log('beforeMount() function called', this.$el ?? 0)
    //null the application doesn't have access to the template yet
  },
  // this hook gets called after the template is mounted onto the page At this point we have a fully functioning application 
  mounted() {
     console.log('mounted() function called', this.$el ?? 0)
  },
  beforeUpdate() {
    // will called whenever an update in our data occurs
    // this is usually used for debugging, but you can also update additional data if you need to
    console.log('beforeUpdated() function called')
  },
  updated() {
    console.log('updated() function called')
  },
  // the last lifecycle is called updated
  beforeUnmount() {
    console.log('beforeUnmount() function called')

  },
  unmounted() {
    console.log('unmounted() function called!')
  }
})

vm.mount('#app')

// setTimeout(() => {
//   vm.amount('#app')
// },3000)


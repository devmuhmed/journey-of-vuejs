let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  },
  methods: {
    moveToBottom() {
      // it will perform one simple task, it'll move the first item in array to the end
      const first = this.people.shift()
      this.people.push(first)
    }
  }
}).mount('#app')

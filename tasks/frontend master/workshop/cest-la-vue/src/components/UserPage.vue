<script>
import UserCard from './UserCard.vue'
import { v4 as uuidv4 } from 'uuid'
export default {
  components: {
    UserCard
  },
  data: () => ({
    userList: [],
    newUser: {
        name: 'mohamed',
    }
  }),
  methods: {
    addNewUser() {
      this.userList.push({
        ...this.newUser,
        id: uuidv4()
      })
    },
    async fetchUsers() {
      this.userList = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
        response.json()
      )
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<template>
  <main>
    <h1>Users</h1>
    <ul>
      <UserCard v-for="user in userList" :user="user" :key="`user-${user.id}`" />
    </ul>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type='email'] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>

<script>
  export default {
            data: ()=> ({
                newCharacter: {
                    name: '',
                    element: [],
                },
                characterList: [
                    {
                        name: 'Aang',
                        element: ['Air', 'Earth', 'Water', 'Fire'],
                    },

                    {
                        name: 'zuko',
                        element: ['Fire'],
                    },

                    {
                        name: 'toph',
                        element: ['Earth'],
                    },

                    {
                        name: 'katara',
                        element: ['Water'],
                    }

                ],
                favoriteList: []
            }),
            computed:{
                benderStatistics() {
                    const elements = ['Air', 'Earth', 'Fire', 'Water']
                    const statistics = {
                        Air: 0,
                        Earth: 0,
                        Water: 0,
                        Fire: 0,
                    }

                    this.characterList.forEach(character => {
                        elements.forEach(element => {
                            if(character.element.indexOf(element) > -1) {
                                statistics[element] += 1 
                            }
                        })
                    })

                    return statistics
                }
            },
            methods: {
                favoriteCharacter(character) {
                    this.favoriteList.push(character)
                },
                addNewCharacter() {
                    this.characterList.push(this.newCharacter)
                    this.newCharacter = { name: '' }
                }
            }
        }
</script>

<template>
        <h2>Statistics</h2>
        <ul>
            <li v-for="(stat, type) in benderStatistics" :key="`bender-${stat}-${type}`">
                {{ type }}: {{ stat }}
            </li>
            {{ benderStatistics }}
        </ul>
        <h2>Characters</h2>
      <p v-if="characterList.length === 0">There are no character</p>
      <ul v-else>
        <li v-for="(character, index) in characterList" :key="`even-character-${index}`">
            <p>
                {{ character.name }}
            </p>
            <button @click="favoriteCharacter(character)">⭐ Favorite</button>
        </li>
      </ul>
      <h2>Favorite Characters</h2>
      <ul v-if="favoriteList.length > 0">
        <li v-for="(character, index) in favoriteList" :key="`odd-character-${index}`">
            {{ character }}
        </li>
      </ul>
      <p v-else>No favorite character</p>
      <h2>New Character</h2>
      <pre>{{ newCharacter }}</pre>
      <label for="character-name">Name</label>
      <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter">
</template>


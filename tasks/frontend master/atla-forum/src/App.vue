<script>
    import BaseCounter from './components/BaseCounter.vue'
    import BenderStatistics from './components/BenderStatistics.vue'
    import CharacterCard from './components/CharacterCard.vue'
  export default {
    components: {
        BaseCounter,   
        BenderStatistics,
        CharacterCard
    },
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
            
            methods: {
                addFavoriteCharacter(payload) {
                    console.log(payload)
                    this.favoriteList.push(payload);
                },
                addNewCharacter() {
                    this.characterList.push(this.newCharacter)
                    this.newCharacter = { name: '' }
                }
            }
        }
</script>

<template>
    <BaseCounter />
    <BenderStatistics :characters="characterList" />
    <h2>Characters</h2>
    <p v-if="characterList.length === 0">There are no character</p>
    <ul v-else>
    <li v-for="(character, index) in characterList" :key="`even-character-${index}`">
        <CharacterCard :character="character" @favorite="addFavoriteCharacter"/>
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

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="pokemon-card">questa è  una pokemon card senza stile</div>
    <BasicComponent v-for="name in usernames" :key="name" :username="name" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PokemonSection :pokemons="pokemons" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BasicComponent from './components/BasicComponent'
import PokemonSection from './components/PokemonSection.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BasicComponent,
    PokemonSection
  },
  data: function() {
    return {
      usernames: ['pippo', 'pluto', 'paperino', 'pina'],
      pokemons: []
    }
  },
  mounted: function() {
    this.$http.get(this.$baseURLApi + '/pokemon')
      .then((result) => {
        console.log(result.data)
        this.pokemons = result.data.results
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

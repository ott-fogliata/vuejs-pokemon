<template>
    <section>
        <PokemonCard v-for="(pokemon, index) in pokemons" 
            :key="index"
            :pokemon="pokemon" />
    </section>
</template>

<script>
import PokemonCard from './PokemonCard.vue'

export default {
  components: { PokemonCard },
    name: 'PokemonSection',
    props: {
        pokemons: Array
    }
}
</script>

<style scoped>

</style>
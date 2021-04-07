<template>
    <div class="pokemon-card">
        <h3>{{pokemon.name}}</h3>
        <p>Descrizione</p>
    </div>
</template>

<script>

export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    }
}
</script>

<style scoped>
    .pokemon-card {
        border:1px #ccc solid;
        box-shadow: 0 0 6px #eee;
        color: blue;
    }
</style>
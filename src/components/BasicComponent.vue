<template>
    <div>
        <h1>Ciao {{username}}</h1>
    </div>
</template>

<script>

export default {
    name: 'BasicComponent',
    props: {
        username: String
    }
}
</script>

<style scoped>

</style>
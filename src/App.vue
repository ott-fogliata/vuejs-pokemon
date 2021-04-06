<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BasicComponent v-for="name in usernames" :username="name" :key="name" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BasicComponent from './components/BasicComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BasicComponent
  },
  data: function() {
    return {
      usernames: ['pippo', 'pippo', 'pluto', 'paperino', 'pina']
    }
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

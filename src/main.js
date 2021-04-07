import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.prototype.$baseURLApi = 'https://pokeapi.co/api/v2'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

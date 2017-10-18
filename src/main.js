import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})

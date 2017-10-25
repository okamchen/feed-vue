import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import './directives/Transform';

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})

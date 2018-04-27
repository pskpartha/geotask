// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAutosize from 'vue-autosize'
import App from './App'

Vue.config.productionTip = true




Vue.use(VueAutosize);
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
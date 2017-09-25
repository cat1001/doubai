// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/doubai.css'
import $ from 'jquery'
import Vue from 'vue'
import Footer from './components/footer'
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#doubai',
  template: '<Footer/>',
  components: { Footer }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import BootstrapVue from 'bootstrap-vue'
import VueLazyload from 'vue-lazyload'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/images/homeLoadingImg.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

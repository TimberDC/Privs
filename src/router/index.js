import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import Actor from '@/pages/actor/Actor'
import ActorDetail from '@/pages/actor-detail/ActorDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/:page',
      name: 'HomePage',
      component: Home
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/actor/a',
      name: 'Actor',
      component: Actor
    }, {
      path: '/actor_detail',
      name: 'ActorDetail',
      component: ActorDetail
    }
  ]
})

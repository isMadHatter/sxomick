import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'
import About from '../components/About.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '', 
      name: 'Home',
      component: Home, 
      redirect: '/index',
      children: [
        { path: '/index',component:Index},
        { path: '/about',component:About}
      ]
    }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Analytics from '@/components/App/Analytics'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/app/main',
      name: 'analytics',
      component: Analytics
    }
  ]
})

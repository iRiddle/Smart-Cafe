import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Main from '@/components/Main'
import Login from '@/components/Login'
import App from '@/components/App/Hello'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/app/main',
      name: 'app',
      component: App
    }
  ]
})

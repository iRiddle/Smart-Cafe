import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Analytics from '@/components/App/Analytics'
import Employers from '@/components/App/Employers'
import Menu from '@/components/App/Menu'
import Store from '@/components/App/Store'
import Products from '@/components/App/Products'
import Orders from '@/components/App/Orders'
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
    },
    {
      path: '/app/employers',
      name: 'employers',
      component: Employers
    },
    {
      path: '/app/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/app/store',
      name: 'store',
      component: Store
    },
    {
      path: '/app/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/app/orders',
      name: 'orders',
      component: Orders
    }
  ]
})

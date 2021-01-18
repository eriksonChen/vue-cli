import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/'
import Form from './views/Form/'
import About from './views/About.vue'
import Table from './views/Table/'
import PageOne from './views/Page1/'
import PageTwo from './views/Page2/'
import PageThree from './views/Page3/'
import Login from './views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      { path: 'page1', component: () => import('./views/Page1/') },
      { path: 'page2', component: PageTwo },
      { path: 'page3', component: PageThree },
      { path: '*', redirect:'/about' },
    ]
  },
  {
    path: '/information',
    name: 'Information',
    component: About,
    children: [
      { path: 'page1', component: () => import('./views/Page1/') },
      { path: 'page2', component: PageTwo },
      { path: 'page3', component: PageThree },
      { path: '*', redirect:'/information' },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})

export default router
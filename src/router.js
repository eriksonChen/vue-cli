import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/'
import Form from './views/Form/'
import About from './views/About.vue'
import Table from './views/Table/'
import Card from './views/Card/'
import PageOne from './views/Page1/'
import PageTwo from './views/Page2/'
import PageThree from './views/Page3/'
import MapPage from './views/Map/'
import Login from './views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    query: {a: "1"},
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/information',
    name: 'Information',
    component: About,
    children: [
      { path: 'page1', name:"info-page1", component: () => import('./views/Page1/') },
      { path: 'page2', name:"info-page2", component: PageTwo },
      { path: 'page3', name:"info-page3", 
        components: {
          default: PageTwo,
          both: PageThree
        } 
      },
      { path: '*', redirect:{ name: 'info-page1'} },
    ]
  },
  {
    path: '/map',
    name: 'gmap',
    component: MapPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: {name:'Home'}
  }
].map(x=>{
  x.props={
    title:x.name,
  }
  return x;
})

const router = new VueRouter({
  mode: 'history', // history , hash
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})
const isAuthenticated=true;

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/'
import Login from '@/views/login.vue'
import { mapState } from "vuex"
import pages from "@/router/page"

Vue.use(VueRouter)

const routes = [
  ...pages.map(x=>{
    x.meta = { requiresAuth: true }
    return x
  }),
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
    query: {a: "1"},
  },
  {
    path: '/information',
    name: 'Information',
    component: ()=>import('@/views/About.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: 'page1', name:"info-page1", component: () => import('@/views/Page1/') },
      { path: 'page2', name:"info-page2", component: () => import('@/views/Page2/') },
      { path: 'page3', name:"info-page3", 
        components: {
          default: ()=>import('@/views/Page1/'),
          both: ()=>import('@/views/Page3/')
        } 
      },
      { path: '*', redirect:{ name: 'info-page1'} },
    ]
  },
  {
    path: '/map',
    name: 'gmap',
    component: () => import('@/views/Map/'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      login:Login
    },
    meta: { requiresAuth: false }
  },
  { 
    path: '*', 
    redirect: '/login' 
  },
].map(x=>{
  x.props={
    title:x.name,
  }
  // if(x.name){
  //   console.log(x.name, x.meta)
  // }
  
  return x;
})
// console.log(routes)

const router = new VueRouter({
  mode: 'history', // history , hash
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
})
router.beforeEach((to, from, next) => {
  //matched的數組中包含$route對象的檢查元字段
  //arr.some() 表示判斷該數組是否有元素符合相應的條件, 返回布爾值
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!$cookies.get("user_token")) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 確保一定要調用 next()
  }
})

// const isAuthenticated=true;
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router
export default [
  {
    path: '/form',
    name: 'Form',
    // meta: { requiresAuth: true },
    component: ()=>import('@/views/Form/'),
  },
  {
    path: '/table',
    name: 'Table',
    // meta: { requiresAuth: true },
    component: ()=>import('@/views/Table')
  },
  {
    path: '/card',
    name: 'Card',
    // meta: { requiresAuth: true },
    component: ()=>import('@/views/Card'),
  }
]
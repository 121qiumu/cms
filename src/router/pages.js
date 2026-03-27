export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/loginView.vue')
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('@/views/not-found/notFoundView.vue')
  },
  {
    path: '/:patchMatch(.*)',
    component: () => import('@/views/not-found/notFoundView.vue')
  }
];

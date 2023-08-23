import Home from '@/views/Home.vue';

const router = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'all',
    redirect: '/',
  },
];

export default router;

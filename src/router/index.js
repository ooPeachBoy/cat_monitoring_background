import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    alias: '/login', //别名配置
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  // 捕获所有的404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

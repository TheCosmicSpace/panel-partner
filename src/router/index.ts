import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import OrderPage from '../views/OrderPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'OrderPage',
    component: OrderPage
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/company-profile',
    name: 'CompanyProfile',
    component: () => import('../views/CompanyProfile.vue')
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: () => import('../views/AuthPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

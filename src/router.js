import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Profile from '@/components/pages/Profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ],
});
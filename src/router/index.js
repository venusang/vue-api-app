import Vue from 'vue';

import Router from 'vue-router';
import Hello from '@/components/Hello';
import Info from '@/components/Info';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
    },
  ],
});

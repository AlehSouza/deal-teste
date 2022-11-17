import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/listing',
    name: 'listing',
    component: () => import('../views/ListingView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import PageRoutes from './PageRoutes';

const routes = [
  {
    path: '',
    name: 'blank-page',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/view/pages/BlankPage.vue'),
  },
  {
    path: '/paginateste',
    name: 'NewPage',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/view/pages/minhaPagina.vue'),
  },
  ...PageRoutes,
];

export default routes;

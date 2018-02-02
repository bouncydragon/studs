import { Flow, Loadable, Recompose } from '../views/pages';

const appRoutes = [
  {
    path: '/recompose',
    name: 'Recompose',
    icon: 'pe-7s-graph',
    component: Recompose,
  },
  {
    path: '/loadable',
    name: 'Loadable',
    icon: 'pe-7s-user',
    component: Loadable,
  },
  {
    path: '/flow',
    name: 'Flow',
    icon: 'pe-7s-user',
    component: Flow,
  },
];

export default appRoutes;

import Recompose from '../views/pages/recompose';
import Loadable from '../views/pages/loadable';

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
];

export default appRoutes;

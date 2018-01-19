import Recompose from '../views/pages/recompose';
import User from '../views/pages/user';

const appRoutes = [
  {
    path: '/recompose', name: 'Recompose', icon: 'pe-7s-graph', component: Recompose,
  },
  {
    path: '/user', name: 'User', icon: 'pe-7s-user', component: User,
  },
];

export default appRoutes;

import Dashboard from '../views/pages/dashboard';
import User from '../views/pages/user';

const appRoutes = [
  { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
  { path: "/user", name: "User", icon: "pe-7s-user", component: User },
];

export default appRoutes;

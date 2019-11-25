import Home from './components/Home';
import Test from './components/Test';

const routesList = [
  {
    path: '/test',
    component: Test
  },
  {
    path: '/',
    exact: true,
    component: Home
  }
];

export default routesList;

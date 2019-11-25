import Home from './components/Home';
import Test from './components/Test';

const routesList = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/test',
    component: Test
  }
];

export default routesList;

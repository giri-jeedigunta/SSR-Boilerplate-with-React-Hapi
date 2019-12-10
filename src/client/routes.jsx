import Home from './components/Home';
import Test from './components/Test';
import TodoListView from './components/ToDo';

const routesList = [
  {
    path: '/test',
    component: Test
  },
  {
    path: '/todo',
    component: TodoListView
  },
  {
    path: '/',
    exact: true,
    component: Home
  }
];

export default routesList;

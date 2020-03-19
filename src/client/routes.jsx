import Home from "./pages/Home";
import Test from "./pages/Test";

const routesList = [
  {
    path: "/test",
    component: Test
  },
  {
    path: "/",
    exact: true,
    component: Home
  }
];

export default routesList;

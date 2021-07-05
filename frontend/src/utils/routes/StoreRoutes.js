import { lazy } from "react";
const HomeScreen = lazy(() => import("../../views/Store/HomeScreen"));

const routes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: HomeScreen,
  },
];

export default routes;

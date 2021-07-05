import { lazy } from "react";
const HomeScreen = lazy(() => import("../../views/Store/HomeScreen"));
const LoginScreen = lazy(() => import("../../views/Store/LoginScreen"));

const routes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: HomeScreen,
  },
  {
    path: "/login",
    name: "login",
    exact: true,
    component: LoginScreen,
  },
];

export default routes;

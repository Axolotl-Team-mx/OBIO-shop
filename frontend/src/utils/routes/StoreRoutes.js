import { lazy } from "react";
const HomeScreen = lazy(() => import("../../views/Store/HomeScreen"));
const LoginScreen = lazy(() => import("../../views/Store/LoginScreen"));
const RegisterBrand = lazy(() => import("../../views/Dashboard/RegisterBrand"));

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
  {
    path: "/brands/register",
    name: "brand-register",
    exact: true,
    component: RegisterBrand,
  },
];

export default routes;

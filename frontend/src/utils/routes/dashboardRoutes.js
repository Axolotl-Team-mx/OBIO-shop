import { lazy } from "react";
const RegisterBrand = lazy(() => import("../../views/Dashboard/RegisterBrand"));

const routes = [
  {
    path: "/brands/register",
    name: "brand-register",
    exact: true,
    component: RegisterBrand,
  },
];

export default routes;

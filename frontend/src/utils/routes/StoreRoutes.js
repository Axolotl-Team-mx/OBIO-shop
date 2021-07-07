import { lazy } from "react";
const HomeScreen = lazy(() => import("../../views/Store/HomeScreen"));
const LoginScreen = lazy(() => import("../../views/Store/LoginScreen"));
const RegisterScreen = lazy(() => import("../../views/Store/RegisterScreen"));
const ProductsScreen = lazy(() => import("../../views/Store/ProductsScreen"));
const RegisterBrand = lazy(() => import("../../views/Dashboard/RegisterBrand"));
const RegisterProduct = lazy(() =>
  import("../../views/Dashboard/RegisterProduct")
);
const CartScreen = lazy(() =>
  import("../../views/Store/CartScreen")
);
const ProductsList = lazy(() =>
  import("../../views/Dashboard/ProductsList")
);
const ProductScreen = lazy(() =>
  import("../../views/Store/ProductScreen")
);

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
    path: "/register",
    name: "register",
    exact: true,
    component: RegisterScreen,
  },
  {
    path: "/brands/register",
    name: "brand-register",
    exact: true,
    component: RegisterBrand,
  },
  {
    path: "/products/register",
    name: "product-register",
    exact: true,
    component: RegisterProduct,
  },
  {
    path: "/products/list",
    name: "product-list",
    exact: true,
    component: ProductsList,
  },
  {
    path: "/products/:id/",
    name: "product-screen",
    exact: true,
    component: ProductScreen,
  },
  {
    path: "/products/",
    name: "products",
    exact: true,
    component: ProductsScreen,
  },
  {
    path: "/cart/:id?",
    name: "cart",
    exact: true,
    component: CartScreen,
  },
];

export default routes;

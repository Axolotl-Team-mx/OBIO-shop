import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
  brandDeleteReducer,
  brandDetailsReducer,
  brandListReducer,
  brandRegisterReducer,
  brandUpdateReducer,
} from "./reducers/brandReducers";
import {
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productRegisterReducer,
  productUpdateReducer,
  productReviewReducer,
  productSearchReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  brandDelete: brandDeleteReducer,
  brandDetails: brandDetailsReducer,
  brandUpdate: brandUpdateReducer,
  brandList: brandListReducer,
  brandRegister: brandRegisterReducer,
  productRegister: productRegisterReducer,
  productDelete: productDeleteReducer,
  productList: productListReducer,
  productUpdate: productUpdateReducer,
  productDetails: productDetailsReducer,
  productReview: productReviewReducer,
  productSearch: productSearchReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

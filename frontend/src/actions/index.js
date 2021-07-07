import axios from "axios";
import { actions as cartActions } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/getproduct/${id}/`);
  data["qty"] = qty;
  dispatch({
    type: cartActions.CART_ADD_ITEM,
    // payload: {
    //   // product: data?.id,
    //   // name: data?.name,
    //   // img: data?.img,
    //   // countInStock: data?.countInStock,
    //   // price: data?.price,

    // },
    payload: data,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: cartActions.CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

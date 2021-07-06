import { actions } from "../constants/productConstants";
export const productRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case actions.PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case actions.PRODUCT_CREATE_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.PRODUCT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const productDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case actions.PRODUCT_DETAILS_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case actions.PRODUCT_DETAILS_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.PRODUCT_DETAILS_RESET:
        return {};
      default:
        return state;
    }
  };
  export const productListReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.PRODUCT_LIST_REQUEST:
        return { loading: true };
      case actions.PRODUCT_LIST_SUCCESS:
        return { loading: false, success: true, products: action.payload };
      case actions.PRODUCT_LIST_FAIL:
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };
  export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case actions.PRODUCT_UPDATE_REQUEST:
        return { loading: true };
      case actions.PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case actions.PRODUCT_UPDATE_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.PRODUCT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case actions.PRODUCT_DELETE_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case actions.PRODUCT_DELETE_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.PRODUCT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
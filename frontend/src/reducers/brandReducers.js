import { actions } from "../constants/brandConstants";
export const brandRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.BRAND_REGISTER_REQUEST:
        return { loading: true };
      case actions.BRAND_REGISTER_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case actions.BRAND_REGISTER_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.BRAND_REGISTER_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const brandDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.BRAND_DETAILS_REQUEST:
        return { loading: true };
      case actions.BRAND_DETAILS_SUCCESS:
        return { loading: false, success: true, brand: action.payload };
      case actions.BRAND_DETAILS_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.BRAND_DETAILS_RESET:
        return {};
      default:
        return state;
    }
  };
  export const brandListReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.BRAND_LIST_REQUEST:
        return { loading: true };
      case actions.BRAND_LIST_SUCCESS:
        return { loading: false, success: true, brands: action.payload };
      case actions.BRAND_LIST_FAIL:
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };
  export const brandUpdateReducer = (state = { brand: {} }, action) => {
    switch (action.type) {
      case actions.BRAND_UPDATE_REQUEST:
        return { loading: true };
      case actions.BRAND_UPDATE_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case actions.BRAND_UPDATE_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.BRAND_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const brandDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case actions.BRAND_DELETE_REQUEST:
        return { loading: true };
      case actions.BRAND_DELETE_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case actions.BRAND_DELETE_FAIL:
        return { loading: false, success: false, error: action.payload };
      case actions.BRAND_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
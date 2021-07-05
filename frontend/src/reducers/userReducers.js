import { actions } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return { loading: true };
    case actions.USER_LOGIN_SUCCESS:
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return { loading: false, success: true, userInfo: action.payload };
    case actions.USER_LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.USER_LOGIN_RESET:
      return { loading: false, success: false, error: null };
    case actions.USER_LOGOUT:
      localStorage.removeItem("userInfo");
      return {};
    default:
      return state;
  }
};

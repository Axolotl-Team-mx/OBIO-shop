import axios from "axios";

export const callApi =
  (url, method, body, constants, isImage = false, token=undefined) =>
  async (dispatch) => {
    const { REQUEST, SUCESS, FAIL } = constants;
    try {
      
      dispatch({ type: REQUEST });
      const { data } = await axios({
        method,
        url: url,
        data: body,
        headers: {
          "Content-Type": isImage ? "multipart/form-data" : "application/json",
          'Authorization': token ? `Bearer ${token}` : "",
        },
      });
      dispatch({ type: SUCESS, payload: data });
    } catch (error) {
      console.log(error)
      dispatch({
        type: FAIL,
        payload: error.message,
      });
    }
  };
import * as types from "../types";

import axios from "axios";

export const fetchposts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/products");
  dispatch({
    type: types.GET_POSTS,
    payload: res.data,
  });
};

import * as types from "../types";

import axios from "axios";
import { publicRequest } from "../../requestMethods";

export const fetchusers = () => async (dispatch) => {
  const res = await publicRequest.post("/auth/login", user);
  try {
    dispatch({
      type: types.POST_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

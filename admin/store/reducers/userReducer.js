import * as types from "../types";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

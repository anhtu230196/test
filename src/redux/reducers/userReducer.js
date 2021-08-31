import {
  AUTH_FAILED,
  AUTH_START,
  AUTH_SUCCESS,
  LOGOUT,
  RESET_MESSAGE,
} from "../actions/typeAction";

const initialState = {
  token: null,
  loading: false,
  errorMess: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, loading: false, token: action.payload.idToken };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        errorMess: "Email or password is incorrect!!!",
      };
    case LOGOUT:
      return { ...state, token: null };
    case RESET_MESSAGE:
      return { ...state, errorMess: "" };
    default:
      return state;
  }
};

export default userReducer;

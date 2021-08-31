import axios from "axios";
import {
  AUTH_FAILED,
  AUTH_START,
  AUTH_SUCCESS,
  LOGOUT,
  RESET_MESSAGE,
} from "./typeAction";

const authStart = () => ({ type: AUTH_START });

const authFailed = () => ({ type: AUTH_FAILED });

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    payload: authData,
  };
};

export const loginAction = (email, password, history) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAD3aeJY71AW-iwfvtK7Z4kxU1KWEc7mqg";
  return axios
    .post(url, authData)
    .then((res) => {
      dispatch(authSuccess(res.data));
      localStorage.setItem("authentication", JSON.stringify(res.data));
      history.push("/");
    })
    .catch((err) => {
      dispatch(authFailed());
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("authentication");
  dispatch({ type: LOGOUT });
};

export const resetMessage = { type: RESET_MESSAGE };

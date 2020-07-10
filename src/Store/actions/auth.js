import * as actionTypes from "./actionTypes";
import axios from "axios";
import { APIurls } from "../../Helper/Urls/url";
import { getformbody } from "../../Helper/Utility.js/Utility";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const signUpStart = () => {
  console.log("signup start");
  return {
    type: actionTypes.SIGNUP_START,
  };
};

export const signUpSuccess = (user) => {
  console.log("signup success");
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    user: user,
  };
};

export const loginSuccess = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user: user,
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error,
  };
};

export const signUpFail = (error) => {
  console.log("sign up fail ", error);
  return {
    type: actionTypes.SIGNUP_FAIL,
    error: error,
  };
};
export const logIn = (email, password) => {

  return (dispatch) => {
    dispatch(loginStart());

    // fetch(APIurls.login,
    //   {
    //     method:'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: getformbody({ email, password }),
    //   })
    axios
      .post(APIurls.login(), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getformbody({ email, password }),
      })
      .then((response) => response.json())
      .then((data) => console.log("data", data))
      .catch((error) => {
        console.log(error);
        dispatch(loginFail(error.response.data));
      });
  };
};

export const signUp = (email, password, username, confirm_password) => {
  return (dispatch) => {
    dispatch(signUpStart());

    // fetch(APIurls.login,
    //   {
    //     method:'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: getformbody({ email, password }),
    //   })
    axios
      .post(APIurls.signup(), {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getformbody({ email, password, username, confirm_password }),
      })
      .then((response) => {
        console.log('response is ',response);
        response.json();
      })
      .then((data) => console.log("data", data))
      .catch((error) => {
        console.log("error is", error);
        dispatch(signUpFail(error.response.data));
      });
  };
};

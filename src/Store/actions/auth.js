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

export const signUpSuccess = (userData) => {
  console.log("signup success");
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    user: userData,
  };
};

export const loginSuccess = (userData) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user: userData,
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
    let url = APIurls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getformbody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if(data.success)
        {localStorage.setItem('token',data.data.token);
        localStorage.setItem('userInfo',data.data.user);
        dispatch(loginSuccess(data.data))}
        else{
          dispatch(loginFail(data.message));
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        // dispatch(loginFail(error));
      });
  };
};

export const signUp = (email, password, username, confirm_password) => {
  return (dispatch) => {
    dispatch(signUpStart());
    let url = APIurls.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getformbody({ email, password, name: username, confirm_password }),
    })
      .then((response) => {
        console.log("response is ", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          dispatch(signUpSuccess(data.data));
        } else {
          dispatch(signUpFail(data.message));
        }
      })
      .catch((error) => {
        console.log("error is", error);
        dispatch(signUpFail(error.response.data));
      });
  };
};

import * as actionTypes from "./actionTypes";
import axios from "axios";
import { APIurls } from "../../Helper/Urls/url";
import { getformbody } from "../../Helper/Utility.js/Utility";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
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

export const logIn = (email, password) => {
  console.log("insde the login outer");
  return (dispatch) => {
    dispatch(loginStart());
    console.log("inside the login");
    // fetch(APIurls.login,
    //   {
    //     method:'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: getformbody({ email, password }),
    //   })
    axios.post(APIurls.login(),{
        method:"POST",
        headers:{
            "Content-type":"application/x-www-form-urlencoded"
        },
        body:getformbody({email,password})
    }).then((response) => response.json())
      .then(data => console.log('data',data))
      .catch((error) => {
        console.log(error);
        dispatch(loginFail(error.response.data));
      });
  };
};

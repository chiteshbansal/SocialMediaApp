import * as actionTypes from "./actionTypes";
import { APIurls } from "../../Helper/Urls/url";

export const userProfileSuccess = (user) => {
  return {
    type: actionTypes.USER_PROFILE_SUCCESS,
    user: user,
  };
};

export const userProfileFail = (error) => {
  return {
    type: actionTypes.USER_PROFILE_FAIL,
    error: error,
  };
};

export const userProfileStart = () => {
  return {
    type: actionTypes.USER_PROFILE_START,
  };
};

export const userProfile = (userId) => {
  return (dispatch) => {
    dispatch(userProfileStart());
    const url = APIurls.userProfile(userId);
    console.log('url',url); 
    fetch(url, {
      method: "GET",
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then((response) => {
          console.log('fetch userProfile response',response);
        return response.json();
      })
      .then((data) => {
        console.log("fetched userprofile data", data);
        if (data.success) {
          dispatch(userProfileSuccess(data.data.user));
        } else {
            console.log('userProfile fetch fail');
          dispatch(userProfileFail(data.message));
        }
      });
  };
};

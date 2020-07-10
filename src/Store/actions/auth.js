import * as actionTypes from './actionTypes';
import axios from 'axios';
import { APIurls } from '../../Helper/Urls/url';
import { getformbody } from '../../Helper/Utility.js/Utility';

export const loginStart = ()=>{
    return {
        type:actionTypes.LOGIN_START,
    }
}

export const loginSuccess = (user)=>{
    return {
        type:actionTypes.LOGIN_SUCCESS,
        user:user,
    }
}

export const loginFail = (error)=>{
    return {
        type:actionTypes.LOGIN_FAIL,
        error:error,
    }
}

export const logIn =(email,password) =>{
    return dispatch =>{
        dispatch(loginStart());
        axios.post(APIurls.login(),{
            header:{
                'Content-Type':"application/x-www-form-urlencoded",
            },
            body:getformbody({email,password}),
        })
            
    }
}

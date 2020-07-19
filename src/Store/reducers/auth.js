import * as actionTypes from '../actions/actionTypes';
import { act } from 'react-dom/test-utils';
const initState = {
    token:null,
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false,
}


 const reducer = (state=initState,action) =>{
    switch(action.type){
        case actionTypes.CLEAR_AUTH_STATE:
            return{
                ...state,
                error:null,
            }
        case actionTypes.LOGIN_START:
        case actionTypes.SIGNUP_START:
            return{
                ...state,
                inProgress:true,
            };
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.SIGNUP_SUCCESS:
            return{
                ...state,
                user:action.user.user,
                token:action.user.token,
                error:null,
                isLoggedIn:true,
                inProgress:false,
            };
        case actionTypes.LOGIN_FAIL:
        case actionTypes.SIGNUP_FAIL:
            return{
                ...state,
                error:action.error,
                inProgress:false,
            };
        case actionTypes.AUTHENTICATE_USER:
            return{
                ...state,
                token:action.token,
                user:action.user,
                isLoggedIn:true,
                error:null,
            };
        case actionTypes.LOG_OUT:
            return{
                ...state,
                token:null,
                user:{},
                isLoggedIn:false,
            }
        default:
            return state;
    }
    
}

export default reducer;
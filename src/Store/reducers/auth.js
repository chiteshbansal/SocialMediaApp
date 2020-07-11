import * as actionTypes from '../actions/actionTypes';
const initState = {
    token:null,
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false,
}


 const reducer = (state=initState,action) =>{
    switch(action.type){
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
                error:action.error,
                inProgress:false,
            };
        default:
            return state;
    }
    
}

export default reducer;
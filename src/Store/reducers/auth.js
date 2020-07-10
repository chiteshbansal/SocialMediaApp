import * as actionTypes from '../actions/actionTypes';
const initState = {
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false,
}


export default const reducer = (state,action) =>{
    switch(action.type){
        case actionTypes.LOGIN_START:
            return{
                ...state,
                inProgress:true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return{
                ... state,
                user:action.user,
                error:null,
                isLoggedIn:true,
                inProgress:false,
            };
        case actionTypes.LOGIN_FAIL:
            return{
                error:action.error,
                inProgress:false,
            };
        default:
            return state;
    }
    
}
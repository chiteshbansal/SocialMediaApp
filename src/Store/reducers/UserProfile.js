import * as actionTypes from '../actions/actionTypes';

const initState = {
    success:false,
    user:{},
    error:null,
    inProgress:false,
}


 const reducer = (state=initState,action) =>{
    switch(action.type){
        case actionTypes.USER_PROFILE_SUCCESS:
            return{
                ...state,
                success:true,
                inProgress:false,
                user:action.user,
            };
        case actionTypes.USER_PROFILE_FAIL:
            return{
                ...state,
                error:action.error,
                inProgress:false,
            }
        case actionTypes.USER_PROFILE_START:
            return{
                ...state,
                inProgress:true,
            }
        default:
            return state;
    }
    
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initState = {
   friends:[]
}


 const reducer = (state=initState,action) =>{
    switch(action.type){
        case actionTypes.FETCH_FRIENDS_SUCCESS:
            return{
                ...state,
                friends:[...action.friends],
            }
        default:
            return state;
    }
    
}

export default reducer;
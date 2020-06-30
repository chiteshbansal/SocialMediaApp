import * as actionTypes from '../actions/actionTypes';

const initState = {
    posts:[],
}


const reducer = (state=initState,action) =>{
    switch(action.type){
        case actionTypes.FETCH_POSTS_SUCCESS:
            return{
                ...state,
                posts:action.posts
            }
        default:
            return state;
    }
}

export default reducer;
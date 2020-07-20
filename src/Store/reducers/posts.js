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
        case actionTypes.ADD_POST:
            let newPost = [action.post,...state.posts];
            return{
                ...state,
                posts:newPost
            }
        default:
            return state;
    }
}

export default reducer;
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const  fetchPostsSuccess = (posts)=>{
    return {
        type:actionTypes.FETCH_POSTS_SUCCESS,
        posts:posts,
    }
}


export const  fetchPosts = () =>{
    return dispatch =>{
        // here I will fetch post from api 
        // the asyn part 
        axios.get('http://codeial.com:8000/api/v2/posts?page=1&limit=5')
            .then(response => {
                const fetchedPosts = response.data.data.posts;
                console.log(fetchedPosts);
                dispatch(fetchPostsSuccess(fetchedPosts));
            })
        // dispatch(fetchPostsSuccess(posts));
    }
}
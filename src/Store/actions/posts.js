import * as actionTypes from './actionTypes';
import axios from 'axios';
import { APIurls } from '../../Helper/Urls/url';

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
        axios.get(APIurls.fetchPosts(1,5))
            .then(response => {
                const fetchedPosts = response.data.data.posts;
                dispatch(fetchPostsSuccess(fetchedPosts));
            })
        // dispatch(fetchPostsSuccess(posts));
    }
}
import * as actionTypes from './actionTypes';
import axios from 'axios';
import { APIurls } from '../../Helper/Urls/url';
import { getformbody } from '../../Helper/Utility.js/Utility';

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
        axios.get(APIurls.fetchPosts(1,25))
            .then(response => {
                const fetchedPosts = response.data.data.posts;
                dispatch(fetchPostsSuccess(fetchedPosts));
            })
        // dispatch(fetchPostsSuccess(posts));
    }
}

export const addPost = (post) =>{
    return {
        type:actionTypes.ADD_POST,
        post:post,
    }
}


export const createPost = (content) =>{
    return dispatch=>{
         
         const url  = APIurls.createPost();
         fetch(url,{
            method:"POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
               Authorization:`Bearer ${localStorage.getItem('token')}`,
            },
            body:getformbody({content}),
         })
         .then(response =>response.json())
         .then(data =>{
             console.log(data);
             if(data.success){
                 console.log('create post success',data);  
                 dispatch(addPost(data.data.post))
             }else{
                 console.log('create post fail ');
             }
         })
    }
}
import * as actionTypes from './actionTypes';
import { APIurls } from '../../Helper/Urls/url';

export const fetchFriendsSuccess = (friends)=>{
    return {
        type:actionTypes.FETCH_FRIENDS_SUCCESS,
        friends:friends,
    }
}

export const fetchFriends = () =>{
    return dispatch =>{
        const url = APIurls.fetchFriends();
        fetch(url,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                 Authorization:`Bearer ${localStorage.getItem('token')}`,
              },
        })
        .then(response =>response.json())
        .then(data=>{
        
            if(data.success){
                dispatch(fetchFriendsSuccess(data.data.friends));
            }
        })
    }
}
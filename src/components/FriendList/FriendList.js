import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import classes from './FriendList.module.css'
function FriendList(props) {
    const{friends} = props;
    let friendList = null;
    if(props.friends.length>0){
        friendList  = props.friends.map(friend=>{
            if(friend.to_user)
            return <FriendListItem userId={friend.to_user._id} name = {friend.to_user.name} email = {friend.to_user.email} />
        })
    }
    return (
        <div className={classes.FriendList}>
            <h2>Friends</h2>
            {friendList}
        </div>
    );
}

export default FriendList;
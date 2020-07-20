import React from 'react';
import classes from './FriendListItem.module.css';
import avatar from '../../../Assets/Images/avatar.jpg'
import {Link} from 'react-router-dom';
function FriendListItem(props) {
    return (
        <div className={classes.FriendListItem}>
            <div className={classes.img_cnt}>
                <Link to={`/UserProfile/${props.userId}`}>
                    <img src = {avatar} alt="profileimg" width="50px" height='50px  '/>
                </Link>
                <div className={classes.UserName}>
                    {props.name}
                </div>
            </div>
            
        </div>
    );
}

export default FriendListItem;
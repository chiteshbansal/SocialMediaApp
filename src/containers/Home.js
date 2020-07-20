import React, { Component } from 'react'
import CreatePost from '../components/CreatePost/CreatePost';

import PostsList from '../components/PostsList/PostsList';
import classes from './Home.module.css';
import FriendList from '../components/FriendList/FriendList';
const Home = (props) => {
    const {isLoggedIn,friends} = props;
    return (
        <div>
            
            <div className={classes.Home}>
                <PostsList posts = {props.posts}/>
                 {isLoggedIn && <FriendList friends = {friends}/>}
            </div>
        </div>
    );
}




export default Home;
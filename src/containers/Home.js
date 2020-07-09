import React, { Component } from 'react'


import PostsList from '../components/PostsList/PostsList';

const Home = (props) => {
    console.log(props);
    return (
        <div>
            <PostsList posts = {props.posts}/>
        </div>
    );
}




export default Home;
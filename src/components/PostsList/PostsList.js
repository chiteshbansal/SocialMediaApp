import React from 'react';
import classes from './PostsList.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';
import Spinner from '../UI/Spinner/Spinner';
const PostsList = (props) =>{
    const {posts} = props;
    let PostsList = <Spinner/>
    if(posts.length>0){
        PostsList= posts.map((post)=>{
                        return <Post post = {post} key={post._id}/>
                    })
                
    }
    return (
        <div className={classes.PostsList}>
            {PostsList}
        </div>
    );
}

PostsList.propTypes = {
    posts:PropTypes.array.isRequired,
}
export default PostsList;
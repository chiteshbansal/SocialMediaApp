import React, { Component } from 'react'
import classes from './CreatePost.module.css';
import * as actions from '../../Store/actions/index';
import {connect} from 'react-redux';
 class CreatePost extends Component {
     constructor(props){
         super(props);
         this.state ={
             content:"",
             createPostStatus:false,
         }
     }

     oninputchangeHandler = (event) =>{
        this.setState({
            content: event.target.value,
        })

     }
     showCreatePostBox = () =>{
         this.setState({
             createPostStatus:true,
         })
     }

     createPostHandler = () =>{
            this.props.dispatch(actions.createPost(this.state.content));
            this.setState({
                content:"",
                createPostStatus:false,
            })
            
     }
     hideCreatePostBox = () =>{
         this.setState({
             createPostStatus:false,
         })
     }
    render() {
        // console.log(this.state.content);
        let createPostClasses = [classes.create_post,classes.create_post_hide];
        if(this.state.createPostStatus){
            createPostClasses = [classes.create_post,classes.create_post_show];
        }
        return (
            <div>
                <button className={classes.createPostBtn} onClick={this.showCreatePostBox}>CreatePost</button>
                <div className={createPostClasses.join(' ')}>
                <div style={{width:"100%"}}>
                    <textarea onChange={this.oninputchangeHandler}></textarea>
                </div>
                <div className={classes.btnCnt}>
                    <button className={classes.create_post_btn} onClick={this.createPostHandler}>Create Post</button>
                    <button onClick={this.hideCreatePostBox} >Back</button>
                </div>
                 </div>
            </div>
        )
    }
}

export default connect()(CreatePost);
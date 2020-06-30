import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../Assets/Images/avatar.jpg";
import Spinner from "../../UI/Spinner/Spinner";
const Post = (props) => {
  const { post } = props;
  let Post = <Spinner />;
  if (post) {
    Post = (
      <div className={classes.Post}>
        <div className={classes.upperCnt}>
          <div className={classes.postAuthor}>
            <div className={classes.authorName}>
              {post ? post.user.name : "username"}
            </div>
            <div className={classes.authorImage}>
              <img src={avatar} alt="AuthorImage" />
            </div>
          </div>
          <div className={classes.postContent}>
            <div className={classes.Header}>
              <div>{post.createdAt}</div>
            </div>
            <div className={classes.postContent_content}>{post.content}</div>
            <div className={classes.actionCnt}>
              <div className={classes.likes}>
                <i className="fas fa-thumbs-up"></i>
                Likes&nbsp;
                {post.likes.length}
              </div>
              <div className={classes.comments}>
                <i className="fas fa-comments"></i>
                Comments&nbsp;
                {post.comments.length}
              </div>
            </div>
          </div>
        </div>
        <hr style={{width:'80%'}}></hr>
        <div className={classes.lowerCnt}>
            <div className={classes.commentBox}>
                <input type='text' 
                    name='comment' 
                    placeholder="Write a Comment ..."/>
            </div>
        
            <div className={classes.commentList}>
                Billy : Good Bro : &nbsp;&nbsp;{post.updatedAt}
            </div>
        </div>
      </div>
    );
  }
  console.log("props are ", post);
  return Post;
};

export default Post;

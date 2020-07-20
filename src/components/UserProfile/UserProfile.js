import React, { Component } from "react";
import classes from "./UserProfile.module.css";
import avatar from "../../Assets/Images/avatar.jpg";
import * as actions from "../../Store/actions/index";
import { connect } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import { APIurls } from "../../Helper/Urls/url";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: null,
      msg:"",
    };
  }
  componentDidMount() {
    const { match } = this.props;
    this.props.dispatch(actions.userProfile(match.params.userId));
    // dispatching an action to fetch the user details
  }

  checkIfUserisaFriend = () => {
    const { match } = this.props;
    const userId = match.params.userId;
    const index = this.props.friends
      .map((friend) => {
        if(friend.to_user)
        {
            return friend.to_user._id;
        }
        
      })
      .indexOf(userId);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };

  addFriendHandler = async () => {
    const userId = this.props.match.params.userId;
    const url = APIurls.addFriend(userId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      console.log("added friend success", data);
      this.setState({
        success: true,
        msg:"Friend Added successfully",
        error: null,
      });
      this.props.dispatch(actions.fetchFriends( ))
    } else {
      console.log("added friend fail", data);
      this.setState({
        success: false,
        msg:"",
        error: data.message,
      });
    }
  };
  removeFriendHandler =async ()=>{
    const userId = this.props.match.params.userId;
    const url = APIurls.removeFriend(userId);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.success) {
      console.log("added removed success", data);
      this.setState({
        success: true,
        msg:"Friend Remove Successfully",
        error: null,
      });
      this.props.dispatch(actions.fetchFriends( ))
    } else {
      console.log("remove friend fail", data);
      this.setState({
        success: false,
        msg:"",
        error: data.message,
      });
    }
  }
  render() {
    // console.log('props in the userprofile',this.props);
    const {
      match: { params },
    } = this.props;
    const { user, inProgress } = this.props;
    if (inProgress) {
      return <Spinner />;
    }
    const Isfriend = this.checkIfUserisaFriend();
    return (
      <div className={classes.settings}>
        <div className={classes.img_cnt}>
          <img src={avatar} alt="userprofile" />
        </div>
        <div className={classes.user_info}>
          <div className={classes.field}>
            <div className={classes.label}>Name: </div>
            <div className={classes.value}> {user.name}</div>
          </div>
          <div className={classes.field}>
            <div className={classes.label}>Email :</div>
            <div className={classes.value}> {user.email}</div>
          </div>
          {this.state.error && <div className={classes.remove_frnd_btn}>{this.state.error}</div>}
          {this.state.success && <div className={classes.add_frnd_btn}>{this.state.msg} </div>}

          <div className={classes.field}>
            {Isfriend ? (
              <button  onClick={this.removeFriendHandler}>
                Remove Friend -
              </button>
            ) : (
              <button  onClick={this.addFriendHandler}>Add friend +</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.UserProfile.user,
    error: state.UserProfile.error,
    inProgress: state.UserProfile.inProgress,
    friends: state.Friends.friends,
  };
};
export default connect(mapStateToProps)(UserProfile);

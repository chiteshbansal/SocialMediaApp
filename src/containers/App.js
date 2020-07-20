import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../Store/actions/index";
import * as jwtDecode from "jwt-decode";
import Signup from "../components/SignUp/SignUp";
// components
import Login from "../components/Loginform/Loginform";
import UserProfile from '../components/UserProfile/UserProfile';
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import Settings from '../components/Settings/Settings';

const PrivateRoute = (props) => {
  console.log("logged in ",props.isLoggedIn);
  const { isLoggedIn, path, component: Component } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to={
         { pathname:"/login",
            state:{
              from:props.location,
            }
        
        }

        }/>;
      }}
    />
  );
};
class App extends Component {
  componentDidMount() {
    this.props.onFetchPostsHandler();
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      console.log("user ", user);
      this.props.onAuthenticateUser(token, user);
      this.props.onFetchFriends();
    }
  }
  render() {
    console.log('friends are ',this.props.friends);
    const { isLoggedIn } = this.props.auth;
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          {/* <Home posts = {this.props.posts}/> */},
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />
            <PrivateRoute path="/settings" component={Settings} isLoggedIn={isLoggedIn} />
            <PrivateRoute path="/UserProfile/:userId" component={UserProfile} isLoggedIn={isLoggedIn} />
            <Route
              path="/"
              render={(props) => {
                return <Home {...props} posts={this.props.posts} isLoggedIn = {isLoggedIn} friends = {this.props.friends} />;
              }}
            />

            <Route
              render={() => {
                return <div>Error 404: Page not Found </div>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToprops = (state) => {
  return {
    posts: state.post.posts,
    auth: state.auth,
    friends:state.Friends.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPostsHandler: () => dispatch(actions.fetchPosts()),
    onAuthenticateUser: (token, user) =>
      dispatch(actions.authenticateUser(token, user)),
    onFetchFriends : () => dispatch(actions.fetchFriends()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);

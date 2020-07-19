import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../Store/actions/index";
import * as jwtDecode from "jwt-decode";
import Signup from "../components/SignUp/SignUp";
// components
import Login from "../components/Loginform/Loginform";
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
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
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
    }
  }
  render() {
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
            <Route
              path="/"
              render={(props) => {
                return <Home {...props} posts={this.props.posts} />;
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPostsHandler: () => dispatch(actions.fetchPosts()),
    onAuthenticateUser: (token, user) =>
      dispatch(actions.authenticateUser(token, user)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);

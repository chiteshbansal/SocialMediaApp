import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../Store/actions/index";
import * as jwtDecode from 'jwt-decode';
import Signup from '../components/SignUp/SignUp';
// components
import Login from '../components/Loginform/Loginform';
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    this.props.onFetchPostsHandler();
    const token  = localStorage.getItem('token');
    if(token){
      const user = jwtDecode(token);
      console.log('user ',user);
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          {/* <Home posts = {this.props.posts}/> */},
          <Switch>
            <Route
              path="/Home"
              exact
              render={(props) => {
                return <Home {...props} posts={this.props.posts} />;
              }}
            />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Signup}/>
            <Route render = {() =>{return <div>Error 404: Page not Found </div>}}/>
            
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPostsHandler: () => dispatch(actions.fetchPosts()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);

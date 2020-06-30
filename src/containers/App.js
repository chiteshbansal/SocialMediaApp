import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../Store/actions/index';
import PropTypes from 'prop-types';
import PostsList from '../components/PostsList/PostsList';
import Navbar from '../components/Navbar/Navbar';
class App extends Component {


  componentDidMount() {
    this.props.onFetchPostsHandler();
  }
  render() {
    return <div>
      <Navbar/>
      <PostsList posts={this.props.posts}/>
    </div>;
  }
}


App.propTypes = {
  posts:PropTypes.array.isRequired,
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPostsHandler : () => dispatch(actions.fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

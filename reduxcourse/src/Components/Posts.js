import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions/postActions"; 
import PropTypes from "prop-types";

class Posts extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    const PostItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title} </h3>
        <p>{post.body} </p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {PostItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

//PropTypes
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
 
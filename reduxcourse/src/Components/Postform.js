import React, { Component } from "react";
import axios from "axios"

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
      e.preventDefault();
      const newPost = {
          title: this.state.title,
          body: this.state.body
      }
      axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
        .then((res) => {
            console.log(res.data)
        })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={ this.onSubmit }>
          <div>
            <label>Post Title</label> <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Post Body</label> <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input type="submit" value="Add Post" />
          </div>
        </form>
      </div>
    );
  }
}

export default Postform;

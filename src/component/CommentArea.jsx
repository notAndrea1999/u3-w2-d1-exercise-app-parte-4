import { Component } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
  },
};

class CommentArea extends Component {
  state = {
    selected: false,
    savedComments: [],
  };

  componentDidUpdate = (prevProps) => {
    console.log(prevProps.id, this.props.id);
    if (prevProps.id !== this.props.id) {
      this.fetchComments();
    }
  };

  fetchComments = async () => {
    try {
      const response = await fetch(URL, options);
      const comment = await response.json();
      const filteredComment = comment.filter((event) => event.elementId === this.props.id);
      // console.log(comment);

      this.setState({ savedComments: filteredComment });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    // console.log("Component Did Mount");
    this.fetchComments();
  };

  render() {
    return (
      <div className="mt-4">
        <CommentList list={this.state.savedComments} />
        <AddComment id={this.props.id} />
      </div>
    );
  }
}

export default CommentArea;

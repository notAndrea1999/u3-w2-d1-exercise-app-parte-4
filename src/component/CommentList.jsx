import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentList extends Component {
  handlleDelete = async (event, _id) => {
    event.preventDefault();

    const response = await fetch(URL + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
      },
    });
  };

  render() {
    // console.log(this.props);
    return (
      <ListGroup>
        {this.props.list.map((comment, index) => (
          <ListGroup.Item key={index}>
            {comment.comment} - {comment.author}
            <Button
              onClick={(event) => {
                this.handlleDelete(event, comment._id);
              }}
              className="btn btn-danger"
            >
              Elimina
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;

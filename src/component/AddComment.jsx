import { Component } from "react";
import { Button, Form } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.id,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTdjMWMwMzRmZjAwMTQwM2Y0ZjEiLCJpYXQiOjE2OTQwODg4NzgsImV4cCI6MTY5NTI5ODQ3OH0.XW49FgQjSHBLNp7b8LzgB31rJ7v9CRGspFQFQ6sAa8s",
        },
      });
      if (response.ok) {
        this.setState({
          comment: "",
          rate: "",
          elementId: this.props.id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form className="mt-3 " onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Inserisci un Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cosa ne pensi?"
            required
            value={this.state.comment}
            onChange={(event) => {
              this.setState({ comment: event.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Inserisci un voto</Form.Label>
          <Form.Select
            required
            value={this.state.rate}
            onChange={(event) => {
              this.setState({ rate: event.target.value });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;

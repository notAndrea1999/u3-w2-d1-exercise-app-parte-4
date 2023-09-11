import { Component } from "react";
import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    savedInput: "",
    filteredBook: this.props.books,
    isItSelected: { id: "", selected: false },
  };

  isSelected = (id) => {
    this.setState({ isItSelected: { id: id, selected: true } });
  };

  filterBookList = (value) => {
    const filteredBooks = this.props.books.filter((book) => book.title.toLowerCase().includes(value));
    // console.log(filteredBooks);
    this.setState({ filteredBook: filteredBooks });
  };

  handleChange = (value) => {
    this.setState({ savedInput: value });
    this.filterBookList(value.toLowerCase());
  };

  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Find a book</InputGroup.Text>
          <Form.Control
            value={this.state.savedInput}
            placeholder="Digita un libro"
            onChange={(event) => {
              this.filterBookList();
              this.handleChange(event.target.value);
            }}
          />
        </InputGroup>
        <Row>
          <Col className="col-8">
            <Row>
              {this.state.filteredBook.map((book, index) => (
                <Col className="col-12 col-sm-6 col-md-4 col-lg-3 gy-4" key={index}>
                  <SingleBook book={book} id={this.state.isItSelected.id} isSelected={this.isSelected} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="col-4">
            {this.state.isItSelected.selected ? (
              <CommentArea id={this.state.isItSelected.id} />
            ) : (
              <Alert variant="info" className="mt-4">
                Scegli un libro per visualizzarne i commenti
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;

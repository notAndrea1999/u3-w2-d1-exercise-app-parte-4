import { Component } from "react";
import books from "../data/horror.json";
import { Card, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <h2 className="mt-3 mb-0">Horror</h2>
        <Row>
          {books.map((book) => (
            <Col className="col-12 col-sm-6 col-md-4 col-lg-3 gy-4" key={`book-${book.asin}`}>
              <Card>
                <Card.Img variant="top" style={{ height: "350px", objectFit: "contain" }} src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.price}$</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;

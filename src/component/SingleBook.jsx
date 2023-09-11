import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  // state = {
  //   selected: false,
  // };

  // componentDidUpdate = () => {
  //   if (this.props.book.id === this.props.id) {
  //     this.setState({ selected: true });
  //   }
  // };

  handleChange = () => {
    this.props.isSelected(this.props.book.asin);
  };

  render() {
    // const cardClass = this.state.selected ? "border border-danger" : "";
    // console.log(this.props.book);
    return (
      <Card>
        <Card.Img
          variant="top"
          style={{ height: "350px", objectFit: "contain" }}
          src={this.props.book.img}
          onClick={() => this.handleChange()}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}$</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

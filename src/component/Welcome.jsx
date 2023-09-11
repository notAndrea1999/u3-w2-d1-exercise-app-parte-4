import { Container } from "react-bootstrap";

const Welcome = (props) => {
  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-4 ">{props.name}</h1>
        <p className="fw-light">{props.subtitle}</p>
        <hr />
        <p className="fw-light">{props.slogan}</p>
      </div>
    </Container>
  );
};

export default Welcome;

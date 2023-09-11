import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar expand="lg" className="bg-dark position-sticky top-0 z-3">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">
          EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;

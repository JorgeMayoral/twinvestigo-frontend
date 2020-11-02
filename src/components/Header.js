// React Bootstrap
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Header = ({ contactButton }) => {
  return (
    <Navbar
      bg="primary"
      variant="light"
      expand="lg"
      collapseOnSelect
      sticky="top"
    >
      <Container>
        <Navbar.Brand>Twinvestigo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="https://jorgemayoral.com/twinvestigo"
              target="_blank noreferrer"
            >
              <Button variant="link" style={{ color: 'black' }}>
                About
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                variant="link"
                style={{ color: 'black' }}
                onClick={contactButton}
              >
                Contact
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// React Bootstrap
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Header = ({ contactButton }) => {
  return (
    <Navbar
      bg="primary"
      variant="primary"
      expand="lg"
      collapseOnSelect
      sticky="top"
    >
      <Container>
        <Navbar.Brand>Twinvestigo</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <a
              href="https://jorgemayoral.com/twinvestigo"
              target="_blank noreferrer"
            >
              <Button variant="link" style={{ color: 'black' }}>
                About
              </Button>
            </a>
            <Button
              variant="link"
              style={{ color: 'black' }}
              onClick={contactButton}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// React Bootstrap
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Header = ({ aboutButton }) => {
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
            <Button
              variant="link"
              style={{ color: 'black' }}
              onClick={aboutButton}
            >
              About
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

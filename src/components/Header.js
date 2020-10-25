// React Bootstrap
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
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
      </Container>
    </Navbar>
  );
};

export default Header;

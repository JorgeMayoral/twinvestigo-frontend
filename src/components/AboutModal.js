import { Modal, Button, ListGroup } from 'react-bootstrap';

const AboutModal = ({ showAbout, closeAbout }) => {
  return (
    <Modal show={showAbout} onHide={closeAbout}>
      <Modal.Header closeButton>
        <Modal.Title>About</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>Web developed by Jorge Mayoral Álvarez</h5>
        <p>If you want to contact me you can do it in the following links:</p>
        <ListGroup>
          <ListGroup.Item>
            <i className="far fa-envelope"></i>
            <a
              href="mailto:y0rch.developer@gmail.com"
              target="_blank noreferrer"
              className="ml-3"
            >
              y0rch.developer@gmail.com
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fab fa-twitter"></i>
            <a
              href="https://twitter.com/_y0rch"
              target="_blank noreferrer"
              className="ml-3"
            >
              @_y0rch
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/JorgeMayoral"
              target="_blank noreferrer"
              className="ml-3"
            >
              JorgeMayoral
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fab fa-linkedin-in"></i>
            <a
              href="https://linkedin.com/in/jorgemayoralalvarez"
              target="_blank noreferrer"
              className="ml-3"
            >
              jorgemayoralalvarez
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={closeAbout}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;

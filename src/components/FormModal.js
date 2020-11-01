import { useState } from 'react';

// React Bootstrap
import { Modal, Button, Form } from 'react-bootstrap';

const FormModal = ({ showForm, closeForm, handleSearch }) => {
  const [formError, setFormError] = useState('');

  const [username, setUsername] = useState('');
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('');
  const [olderTweets, setOlderTweets] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleSearchTextChange = (e) => setSearchText(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleOlderTweetsChange = (e) => setOlderTweets(e.target.value);

  const cleanForm = () => {
    setFormError('');
    setUsername('');
    setSearchText('');
    setCity('');
    setOlderTweets(false);
  };

  const handleCancel = () => {
    cleanForm();
    closeForm();
  };

  const handleClick = () => {
    if (username === '' && searchText === '' && city === '') {
      setFormError('ERROR: At least one of the fields should be filled!');
    } else {
      const parameters = {
        username: username,
        searchText: searchText,
        city: city,
        olderTweets: olderTweets,
      };
      handleSearch(parameters);
    }
  };

  return (
    <Modal show={showForm} onHide={closeForm}>
      <Modal.Header closeButton>
        <Modal.Title>Tweets Search Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Form.Text className="text-muted">Username without "@"</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Text"
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <Form.Text className="text-muted">
              Text you want to search
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
            />
            <Form.Text className="text-muted">
              City where you want to search for tweets
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Older tweets first"
              value={olderTweets}
              onChange={handleOlderTweetsChange}
            />
          </Form.Group>
          <h6 style={{ color: 'red' }}>{formError}</h6>
        </Form>
        <Button className="float-left" variant="warning" onClick={cleanForm}>
          <i className="fas fa-trash mr-2"></i>
          Clean Form
        </Button>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleCancel}>
          <i className="fas fa-times-circle mr-2"></i>
          Cancel
        </Button>
        <Button className="float-right" variant="primary" onClick={handleClick}>
          <i className="fas fa-search mr-2"></i>
          Search
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;

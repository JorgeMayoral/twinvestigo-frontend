import React, { useState } from 'react';

// React Bootstrap
import { Modal, Button, Form } from 'react-bootstrap';

const FormModal = ({ showForm, closeForm, handleSearch }) => {
  const [formError, setFormError] = useState('');

  const [username, setUsername] = useState('');
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('');
  const [since, setSince] = useState('');
  const [until, setUntil] = useState('');
  const [olderTweets, setOlderTweets] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleSearchTextChange = (e) => setSearchText(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleSinceChange = (e) => setSince(e.target.value);
  const handleUntilChange = (e) => setUntil(e.target.value);
  const handleOlderTweetsChange = (e) => setOlderTweets(e.target.value);

  const cleanForm = () => {
    setFormError('');
    setUsername('');
    setSearchText('');
    setCity('');
    setSince('');
    setUntil('');
    setOlderTweets(false);
  };

  const handleCancel = () => {
    cleanForm();
    closeForm();
  };

  const handleClick = () => {
    if (username === '' && searchText === '' && city === '') {
      setFormError('ERROR: At least one of the fields should be filled!');
    } else if (username !== '' && searchText !== '') {
      setFormError(
        'ERROR: Choose either username OR text. \nWe are sorry, but right now we cannot search by username and text at the same time. Please, clear either the username box or the text box',
      );
    } else {
      const parameters = {
        username: username,
        searchText: searchText,
        city: city,
        since: since,
        until: until,
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
        <p>
          Right now you can't search tweets from a user that contains a text.
          Choose only username or text.
        </p>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="_y0rch"
              value={username}
              onChange={handleUsernameChange}
            />
            <Form.Text className="text-muted">
              Username without "@". If you search by username, you cannot search
              by text.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Twinvestigo"
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <Form.Text className="text-muted">
              Text you want to search. If you search by text, you cannot search
              by username.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ciudad Real"
              value={city}
              onChange={handleCityChange}
            />
            <Form.Text className="text-muted">
              City where you want to search for tweets
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Since</Form.Label>
            <Form.Control
              type="text"
              placeholder="2020-01-31"
              value={since}
              onChange={handleSinceChange}
            />
            <Form.Text className="text-muted">
              Date from which you want to search
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Until</Form.Label>
            <Form.Control
              type="text"
              placeholder="2020-11-27"
              value={until}
              onChange={handleUntilChange}
            />
            <Form.Text className="text-muted">
              Date until which you want to search
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

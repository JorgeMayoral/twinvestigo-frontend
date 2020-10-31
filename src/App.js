import { useState } from 'react';
import axios from 'axios';

// React Bootstrap
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// My Components
import Header from './components/Header';
import ContactModal from './components/ContactModal';
import Tweet from './components/Tweet';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const [username, setUsername] = useState('');
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('');
  const [olderTweets, setOlderTweets] = useState(false);

  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  const searchTweets = async () => {
    try {
      const parameters = {
        username: username,
        searchText: searchText,
        city: city,
      };

      const response = await axios.post(
        'https://twinvestigo-backend-aen2xlivgq-ew.a.run.app/api/search',
        parameters,
        { headers: { 'Access-Control-Allow-Origin': '*' } },
      );
      if (olderTweets) {
        setTweets(response.data.reverse());
      } else {
        setTweets(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleOlderTweetsChange = (e) => {
    setOlderTweets(e.target.value);
  };

  const handleClick = async () => {
    try {
      if (username === '' && searchText === '' && city === '') {
        setFormError('ERROR: At least one of the fields should be filled!');
      } else {
        setFormError('');
        setTweets([]);
        setLoading(true);
        await searchTweets();
        setLoading(false);
        setUsername('');
        setSearchText('');
        setCity('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ContactModal
        showContact={showContact}
        closeContact={() => handleCloseContact()}
      />

      <Header contactButton={() => handleShowContact()} />
      <Container className="mt-4">
        <Row>
          <Col xs={3}>
            <Container>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    onChange={handleUsernameChange}
                    value={username}
                  />
                  <Form.Text className="text-muted">
                    Username without "@"
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Text</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Text"
                    onChange={handleSearchTextChange}
                    value={searchText}
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
                    onChange={handleCityChange}
                    value={city}
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
              </Form>
              <Button
                className="float-right"
                variant="primary"
                onClick={handleClick}
                disabled={loading}
              >
                Search
              </Button>
              <h6 style={{ color: 'red' }}>{formError}</h6>
            </Container>
          </Col>
          <Col xs={7}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Container>
                {tweets.length > 0 ? (
                  tweets.map((tweet) => (
                    <Card className="my-2 p-4" key={tweet.id}>
                      <Tweet tweet={tweet} />
                    </Card>
                  ))
                ) : (
                  <h3 className="text-center">
                    Make a search to see the results
                  </h3>
                )}
              </Container>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

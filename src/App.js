import { useState, useEffect } from 'react';
import axios from 'axios';

// React Bootstrap
import { Container, Button, Card } from 'react-bootstrap';

// My Components
import Header from './components/Header';
import ContactModal from './components/ContactModal';
import FormModal from './components/FormModal';
import Tweet from './components/Tweet';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const [parameters, setParameters] = useState();

  const [showContact, setShowContact] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleShowContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const searchTweets = async () => {
    try {
      const request = {
        username: parameters.username,
        searchText: parameters.searchText,
        city: parameters.city,
      };

      setTweets([]);
      setLoading(true);

      const response = await axios.post(
        'https://twinvestigo-backend-aen2xlivgq-ew.a.run.app/api/search',
        request,
        { headers: { 'Access-Control-Allow-Origin': '*' } },
      );
      if (parameters.olderTweets) {
        setTweets(response.data.reverse());
      } else {
        setTweets(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (params) => {
    setParameters(params);
    setShowForm(false);
    searchTweets();
  };

  useEffect(() => {
    if (parameters) {
      searchTweets();
    }
  }, [parameters]);

  return (
    <>
      <ContactModal
        showContact={showContact}
        closeContact={() => handleCloseContact()}
      />
      <FormModal
        showForm={showForm}
        closeForm={() => handleCloseForm()}
        handleSearch={handleSearch}
      />

      <Header contactButton={() => handleShowContact()} />
      <Container className="mt-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Container>
            <Button
              variant="primary"
              className="text-center"
              onClick={handleShowForm}
            >
              <i className="fas fa-search mr-2"></i>
              Search Tweets
            </Button>
            {tweets.map((tweet) => (
              <Card className="my-2 p-4" key={tweet.id}>
                <Tweet tweet={tweet} />
              </Card>
            ))}
          </Container>
        )}
      </Container>
    </>
  );
};

export default App;

//React Bootstrap
import { Media, Image, Row, Card } from 'react-bootstrap';

const Tweet = ({ tweet }) => {
  return (
    <Card className="my-2 p-4" key={tweet.id}>
      <Media>
        <Media.Body className="mx-2">
          <Row>
            <a
              href={`https://twitter.com/${tweet.username}`}
              target="_blank noreferrer"
            >
              <h3 className="align-text-bottom">{tweet.name}</h3>
            </a>

            <h6 className="ml-auto align-text-bottom">{tweet.datetime}</h6>
          </Row>
          <Row>
            <h6 className="ml-3 align-text-bottom">{`@${tweet.username}`}</h6>
          </Row>
          <Row>
            <p>{tweet.tweet}</p>
          </Row>
          <Row>
            {tweet.photos.length > 0
              ? tweet.photos.map((photo) => <Image src={photo} rounded fluid />)
              : null}
          </Row>
          <Row>
            <a
              href={`https://twitter.com/${tweet.username}/status/${tweet.conversation_id}`}
              target="_blank noreferrer"
            >
              <i className="fas fa-link"></i>
              Link to tweet
            </a>
          </Row>
        </Media.Body>
      </Media>
    </Card>
  );
};

export default Tweet;

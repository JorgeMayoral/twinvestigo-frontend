//React Bootstrap
import { Media, Image, Row, Col } from 'react-bootstrap';

const Tweet = ({ tweet }) => {
  return (
    <Media>
      <Media.Body className="mx-2">
        <Row>
          <Col>
            <a
              href={`https://twitter.com/${tweet.username}`}
              target="_blank noreferrer"
            >
              <h3 className="float-top">{tweet.name}</h3>
            </a>
          </Col>
          <Col>
            <h6 className="float-right float-top">{`@${tweet.username}`}</h6>
          </Col>
        </Row>
        <Row>
          <p>{tweet.tweet}</p>
        </Row>
        <Row>
          {tweet.photos.length > 0
            ? tweet.photos.map((photo) => <Image src={photo} thumbnail />)
            : null}
        </Row>
        <Row>
          <Col>
            <a
              href={`https://twitter.com/${tweet.username}/status/${tweet.conversation_id}`}
              target="_blank noreferrer"
            >
              Link to tweet
            </a>
          </Col>
          <Col>
            <h6 className="float-right">{tweet.datetime}</h6>
          </Col>
        </Row>
      </Media.Body>
    </Media>
  );
};

export default Tweet;

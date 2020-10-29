import { Spinner, Container } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Container className="text-center">
      <Spinner
        animation="grow"
        role="status"
        variant="primary"
        style={{ width: '10rem', height: '10rem' }}
      />
      <h4 className="my-4">Loading tweets...</h4>
    </Container>
  );
};

export default LoadingSpinner;

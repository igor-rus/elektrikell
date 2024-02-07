import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ErrorModal = ({show, handleClose, errorMessage}) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Error</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>{errorMessage}</p>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={handleClose} variant="secondary">Close</Button>
    </Modal.Footer>
  </Modal>
);

export default ErrorModal;
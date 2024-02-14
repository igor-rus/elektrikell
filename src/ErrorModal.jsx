import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "./services/stateService";

const ErrorModal = () => {
  console.log('Error Model');
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorModalSlice.errorMessage);
  const closeErrorModal = () => dispatch(setErrorMessage(null));
  const isErrorModalOpen = errorMessage !== null;

  return (
    <Modal show={isErrorModalOpen} onHide={closeErrorModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={closeErrorModal} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ErrorModal;
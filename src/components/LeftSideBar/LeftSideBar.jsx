import { Offcanvas } from "react-bootstrap";
import SearchForm from "./SearchForm";

const LeftSideBar = ({ show, handleClose }) => {
  return (
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
  );
};

export default LeftSideBar;

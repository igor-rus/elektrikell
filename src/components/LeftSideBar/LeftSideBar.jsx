import { Offcanvas } from "react-bootstrap";
import SearchForm from "./SearchForm";

const LeftSideBar = ({ show, handleClose, ...formProps }) => {
  return (
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search by dates</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm handleClose={handleClose} {...formProps}/>
        </Offcanvas.Body>
      </Offcanvas>
  );
};

export default LeftSideBar;

import SearchForm from "./SearchForm";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../../services/stateService";

const LeftSideBar = () => {
  const showSideBar = useSelector((state) => state.leftSideBarSlice.showSideBar)
  const dispatch = useDispatch();

  return (
      <Offcanvas show={showSideBar} onHide={() => dispatch(closeSideBar)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search by dates</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm />
        </Offcanvas.Body>
      </Offcanvas>
  );
};

export default LeftSideBar;

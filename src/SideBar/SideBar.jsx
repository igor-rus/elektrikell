
import { Offcanvas } from "react-bootstrap";
import SearchForm from "./SearchForm";

const SideBar = ({show, handleClose: handleSideBarClose}) => {
    return ( <>
     <Offcanvas show={show} onHide={handleSideBarClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm handleSideBarClose={handleSideBarClose}/>
        </Offcanvas.Body>
      </Offcanvas>
    
    </> );
}
 
export default SideBar;
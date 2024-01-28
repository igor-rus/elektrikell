import { useState } from "react";

import Logo from "./Logo";
import Info from "./Info";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";

const Head = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchFormClose = () => setShowSearch(false);
  const handleSearchFormShow = () => setShowSearch(true);

  return (
    <>
      <Row>
        <Col>
          <Logo width={32} height={32} />
          <SideBar show={showSearch} handleClose={handleSearchFormClose} />
          <Button variant="primary" onClick={handleSearchFormShow}>
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Info {...props} />
      </Row>
    </>
  );
};

export default Head;

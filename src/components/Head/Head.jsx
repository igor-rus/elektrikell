import Logo from "./Logo";
import Info from "./Info";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {openSideBar} from "../../services/stateService";

const Head = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <Row>
        <Col>
          <Logo width={32} height={32} />
          <Button variant="primary" onClick={() => dispatch(openSideBar)}>
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Info />
      </Row>
    </>
  );
};

export default Head;

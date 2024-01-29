import Logo from "./Logo";
import Info from "./Info";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Head = (props) => {
  const {handleSideBarOpen, ...rest} = props;
  
  return (
    <>
      <Row>
        <Col>
          <Logo width={32} height={32} />
          <Button variant="primary" onClick={handleSideBarOpen}>
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Info {...rest} />
      </Row>
    </>
  );
};

export default Head;

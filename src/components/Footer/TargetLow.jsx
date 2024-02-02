import { useState } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import InfoPanel from "./InfoPanel";

const TargetLow = (props) => {
  const [nightConsumption, setNightConsumption] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <span>I want to consume: </span>
          <Button
            onClick={() => setNightConsumption(!nightConsumption)}
            active={nightConsumption}
            variant="secondary"
          >
            before morning
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Intervals {...props} />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoPanel {...props}/>
        </Col>
      </Row>
      <Row>
        <Col>
          Then the average kilowatt-hour price is 9.47 cents, which is 8%
          cheaper than starting at the current hour
        </Col>
      </Row>
    </>
  );
};

export default TargetLow;

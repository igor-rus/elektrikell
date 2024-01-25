import { useState } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import { intervalOptions } from "./configuration";
import CountdownTimer from "./CountdownTimer";

const TargetLow = () => {
  const [nightConsumption, setNightConsumption] = useState(false);
  const bestTimeToConsume = new Date();
  bestTimeToConsume.setDate(bestTimeToConsume.getDate() + 1);

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
          <Intervals intervalOptions={intervalOptions} />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
            The best time for this is from 11:00 p.m. to 1:00 a.m., ETA for
            which is:
          </span>
          <CountdownTimer leftUntil={bestTimeToConsume} />
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

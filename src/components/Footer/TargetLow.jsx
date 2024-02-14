import { useState } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Intervals from "./Intervals";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";

const TargetLow = () => {
  console.log('Target Low');
  const [nightConsumption, setNightConsumption] = useState(false);
  const bestUntil = useSelector((state) => state.feasibleConsumptionTimeslotSlice.bestUntil);

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
          <Intervals />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
            The best time for this is from 11:00 p.m. to 1:00 a.m., ETA for
            which is:{' '}
          </span>
          {bestUntil && (<Countdown date={bestUntil * 1000} daysInHours={ true }>
            <div>The time is <strong>NOW</strong></div>
          </Countdown>) }
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

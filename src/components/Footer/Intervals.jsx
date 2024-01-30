import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { INTERVAL_OPTIONS } from "./configuration";

const Intervals = ({ activeHour, setActiveHour }) => {
  return (
    <Row>
      <Col>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center"
        >
          {INTERVAL_OPTIONS.map(({ id, name }) => {
            return (
              <Button
                key={id}
                onClick={() => {
                  setActiveHour(id);
                }}
                variant="outline-warning"
                active={(activeHour || 1) === id}
              >
                {name}
              </Button>
            );
          })}
        </Stack>
      </Col>
    </Row>
  );
};

export default Intervals;
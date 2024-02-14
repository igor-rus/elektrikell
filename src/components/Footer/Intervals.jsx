import { Row, Col, Button, Stack } from "react-bootstrap";
import { INTERVAL_OPTIONS } from "./configuration";
import { useSelector, useDispatch } from "react-redux";
import { setActiveHour } from "../../services/stateService";

const Intervals = () => {
  const dispatch = useDispatch();
  const activeHour = useSelector((state) => state.mainSlice.activeHour)
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
                  dispatch(setActiveHour(id));
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

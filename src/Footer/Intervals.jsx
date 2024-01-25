import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intervals = ({ intervalOptions }) => {
  return (
    <Row>
      {intervalOptions.durations.map((duration, index) => (
        <Col key={index}>{duration} {intervalOptions.timeUnit}</Col>
      ))}
    </Row>
  );
};

export default Intervals;

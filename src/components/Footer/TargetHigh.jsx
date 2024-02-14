import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TargetHigh = () => {
  console.log('Target High');
  return (
    <Row>
      <Col>
        <span>In the the near future</span><br></br>
        <b>There are no peak consumption hours</b>
        <div>
          If you want to consume at the most reasonable time, select "Low price"
          from above toggle and find the best time for it.
        </div>
        <span>
          We recommend reducing electricity consumption during peak hours to
          contribute to Europe's common goal of reducing electricity consumption
          by -5% during peak hours and reducing natural gas demand. <a href="https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/">Read closer</a>
        </span>
      </Col>
    </Row>
  );
};

export default TargetHigh;

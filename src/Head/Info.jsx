
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS } from "./constants";


const Info = ({activePrice, setActivePrice}) => {
 
  return (
    <>
      <Col></Col>
      <Col>
        <ButtonGroup>
          {PRICE_BUTTONS.map(({ name, id }) => (
            <Button
              key={id}
              onClick={() => setActivePrice(id)}
              active={activePrice === id}
              variant="secondary"
            >
              {name}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
      <Col></Col>
    </>
  );
};

export default Info;

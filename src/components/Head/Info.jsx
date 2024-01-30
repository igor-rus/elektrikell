import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from 'react-bootstrap/Badge';
import {PRICE_BUTTONS, BADGES, DEFAULT_REGION_ID} from "./constants";
import {useEffect, useState} from "react";
import {getCurrentMarketPriceForRegion} from "../../services/nordPoolPriceService";
import {convertPriceToCentsPerKwH} from "../../utils/formatChartDataPoints";

const Info = ({activePrice, setActivePrice}) => {
  const [currentMarketPrice, setCurrentMarketPrice] = useState(null);

  useEffect(() => {
    getCurrentMarketPriceForRegion(DEFAULT_REGION_ID).then(({data}) => {
      setCurrentMarketPrice(convertPriceToCentsPerKwH(data.pop().price));
    });
  }, [])

  return (
    <>
      <Col>
        <div>The current price of electricity is</div>
        <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
      </Col>
      <Col>
        <ButtonGroup>
          {PRICE_BUTTONS.map(({name, id}) => (
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
      <Col className="text-end">
        <h2>{currentMarketPrice}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
};

export default Info;

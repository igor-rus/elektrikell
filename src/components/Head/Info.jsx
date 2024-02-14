import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from 'react-bootstrap/Badge';
import { PRICE_BUTTONS, BADGES } from "./constants";
import { getCurrentPrice } from "../../services/apiService";
import { mwToKw, addVAT } from "../../utils/priceFormatter";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice, setErrorMessage } from "../../services/stateService";

const Info = () => {
  console.log('Info');
  const dispatch = useDispatch();
  const activePrice = useSelector(state => state.mainSlice.activePrice);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const {data, success} = await getCurrentPrice();

        if (!success) throw new Error();

        setCurrentPrice(addVAT(mwToKw(data[0].price), "ee"));
      } catch {
        dispatch(setErrorMessage(ERROR_MESSAGE));
      }
    })();
  }, [dispatch])

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
              onClick={() => dispatch(setActivePrice(id))}
              active={activePrice === id}
              variant="secondary"
            >
              {name}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
      <Col className="text-end">
        <h2>{currentPrice}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
};

export default Info;

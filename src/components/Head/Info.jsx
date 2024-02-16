import { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS} from "./constants";
import { getCurrentPrice } from "../../services/apiService";
import { mwToKw, addVAT } from "../../utils/priceFormatter";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice, setErrorMessage } from "../../services/stateService";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

import BadgePrice from "./BadgePrice";

const Info = () => {
  console.log('Info');
  const dispatch = useDispatch();
  const activePrice = useSelector(state => state.mainSlice.activePrice);
  const {values, actions: { setCurrentPrice }} = useContext(ElectricPriceContext);

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
  }, [setCurrentPrice, dispatch])

  return (
    <>
      <Col>
        <div>The current price of electricity is</div>
        <BadgePrice {...values}/>
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
        <h2>{values.currentPrice}</h2>
        <div>cent / kilowatt-hour</div>
      </Col>
    </>
  );
};

export default Info;

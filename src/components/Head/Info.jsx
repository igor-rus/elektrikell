import { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PRICE_BUTTONS } from "./constants";
import { getCurrentPrice } from "../../services/apiService";
import { mwToKw, addVAT } from "../../utils/priceFormatter";
import { ERROR_MESSAGE } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { setActivePrice, setErrorMessage } from "../../services/stateService";
import PriceBadge from "../PriceBadge";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

const Info = () => {
  console.log('Info');
  const dispatch = useDispatch();
  const activePrice = useSelector(state => state.mainSlice.activePrice);
  const { actions, values } = useContext(ElectricPriceContext);

  useEffect(() => {
    (async () => {
      try {
        const {data, success} = await getCurrentPrice();

        if (!success) throw new Error();

        actions.setCurrentPrice(addVAT(mwToKw(data[0].price), "ee"));
      } catch {
        dispatch(setErrorMessage(ERROR_MESSAGE));
      }
    })();
  }, [actions, dispatch])

  return (
    <>
      <Col>
        <PriceBadge />
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

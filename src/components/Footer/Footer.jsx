import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_PRICE_BUTTON_ID } from "../Head";
import { useSelector } from "react-redux";

const Footer = ({ bestUntil }) => {
  const activePrice = useSelector(state => state.main.activePrice);

  return (
    <>
      {activePrice === DEFAULT_ACTIVE_PRICE_BUTTON_ID ? (<TargetLow bestUntil={bestUntil} />) : (<TargetHigh />)}
    </>
  );
};

export default Footer;

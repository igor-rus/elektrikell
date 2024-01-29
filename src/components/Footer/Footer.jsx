import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_PRICE_BUTTON_ID } from "../Head";

const Footer = ({ activePrice, activeHour, setActiveHour }) => {
  return (
    <>
      {activePrice === DEFAULT_ACTIVE_PRICE_BUTTON_ID ? (<TargetLow activeHour={activeHour} setActiveHour={setActiveHour} />) : (<TargetHigh />)}
    </>
  );
};

export default Footer;

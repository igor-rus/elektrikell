import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";
import { DEFAULT_ACTIVE_PRICE_BUTTON_ID } from "../Head";

const Footer = ({ activePrice }) => {
  return <>{activePrice === DEFAULT_ACTIVE_PRICE_BUTTON_ID ? <TargetLow /> : <TargetHigh />}</>;
};

export default Footer;

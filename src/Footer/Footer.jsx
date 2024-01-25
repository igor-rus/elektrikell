import TargetHigh from "./TargetHigh";
import TargetLow from "./TargetLow";

const Footer = ({ activePrice }) => {
  console.log(activePrice);
  return <>{activePrice === "low" ? <TargetLow /> : <TargetHigh />}</>;
};

export default Footer;

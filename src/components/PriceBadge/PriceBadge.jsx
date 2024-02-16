import Badge from "react-bootstrap/Badge";
import { BADGES } from "../Head";
import { useContext } from "react";
import { ElectricPriceContext } from "../contexts/ElectricPriceContext";

export const PriceBadge = () => {
  const {values} = useContext(ElectricPriceContext);

  const comparePrices = () => {
    const {averagePrice, currentPrice} = values;

    if (currentPrice && averagePrice) {
      if (currentPrice < averagePrice) {
        return BADGES[0];
      } else if (currentPrice > averagePrice) {
        return BADGES[1];
      }
      return BADGES[2];
    }
  }

  const badgeStatus = comparePrices() === undefined ? BADGES[2] : comparePrices();

  return (
    <>
      <div>The current price of electricity is</div>
      <Badge bg={badgeStatus.name}>{badgeStatus.id}</Badge>
    </>
  );
};

export default PriceBadge;
import { BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';

export const BadgePrice = ({averagePrice, currentPrice}) => {

  if(averagePrice < currentPrice) {
    return <Badge bg={BADGES[1].name}>{BADGES[1].id}</Badge>
  }
  if (averagePrice > currentPrice) {
    return <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
  }
  if (averagePrice === currentPrice) {
    return <Badge bg={BADGES[2].name}>{BADGES[2].id}</Badge>
  }
}

export default BadgePrice;

import moment from "moment";
import { mwToKw } from "./priceFormatter";

export default function chartDataConverter(marketPrices) {

  const formatDataPoint = (dataPoint) => {
    return {
      ...dataPoint,
      price: mwToKw(dataPoint.price),
      hour: moment.unix(dataPoint.timestamp).format("HH")};
  }

  return marketPrices.map(dataPoint => formatDataPoint(dataPoint));
}
import moment from "moment";

export default function chartDataConverter(marketPrices) {

  const formatDataPoint = (dataPoint) => {
    return {
      ...dataPoint,
      hour: moment.unix(dataPoint.timestamp).format("hh")};
  }

  return marketPrices.map(dataPoint => formatDataPoint(dataPoint));
}
import moment from "moment";

export default function formatChartDataPoints(marketPrices) {

  const formatDataPoint = (dataPoint) => {
    return {
      price: convertPriceToCentsPerKwH(dataPoint.price),
      hour: moment.unix(dataPoint.timestamp).format("hh")};
  }

  return marketPrices.map(dataPoint => formatDataPoint(dataPoint));
}

export const convertPriceToCentsPerKwH = (euroPerMwH) => {
  return (Number.parseFloat(euroPerMwH) / 10).toFixed(2);
}
import moment from "moment";
import lodash from "lodash";

export const removePast = (data) => {
  return data.filter(({timestamp}) => {
    return moment.unix(timestamp).isAfter(moment())
  })
};

const calculateAverage = (window, k) => {
  let sum = window.reduce((acc, {price}) => acc + Number.parseFloat(price), 0);
  return (sum / k).toFixed(2);
};

const findSectorIndexes = (initialRange, sector) => {
  if (!initialRange || lodash.isEmpty(sector)) {
    return;
  }
  return sector.window.map((r) => {
    return {
      ...r,
      index: initialRange.findIndex(({timestamp}) => timestamp === r.timestamp),
      average: sector.average
    }
  });
}

export const getLowestPriceInterval = function (data, duration) {
  const futureData = removePast(data);
  let lowestAverageSeenSoFar = Infinity;
  let bestWindow = {};

  for (let i = 0, j = i + duration; i < futureData.length - duration; i++, j++) {
    const slidingWindow = futureData.slice(i, j);
    const average = calculateAverage(slidingWindow, duration);
    if (average < lowestAverageSeenSoFar) {
      bestWindow = {
        window: slidingWindow,
        average: average
      };
    }
    lowestAverageSeenSoFar = Math.min(average, lowestAverageSeenSoFar);
  }
  return findSectorIndexes(data, bestWindow);
}

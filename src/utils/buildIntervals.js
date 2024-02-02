import moment from "moment";

export const removePast = (data) => {
  return data.filter(({timestamp}) => {
    return moment.unix(timestamp).isAfter(moment())
  })
};

export const getLowestPriceInterval = (data, interval) => {
  let minimum = Infinity;
  let result = [];
  const futureData = removePast(data);

  futureData.forEach((_, i) => {
    const dataInterval = futureData.slice(i, i + interval + 1);

    if (dataInterval.length < interval) {
      return;
    }
    const sumInterval = dataInterval.reduce((acc, {price}) => {
      return acc + Number.parseFloat(price);
    }, 0);

    if (minimum > sumInterval) {
      minimum = sumInterval;
      result = dataInterval;
    }
  });

  return result.map((r) => {
    return {
      ...result,
      index: data.findIndex(({timestamp}) => timestamp === r.timestamp),
    }
  });
}

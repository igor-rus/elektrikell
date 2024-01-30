const apiBaseUrl = 'https://dashboard.elering.ee/api/'

export const getMarketPricesForPeriod = async () => {
  const from = '2024-01-28T20:59:59.999Z';
  const until = '2024-01-30T20:59:59.999Z';

  const data = new URLSearchParams({
    start: from,
    end: until,
  });

  const response = await fetch(`${apiBaseUrl}/nps/price?${data}`);

  return await response.json();
}

export const getCurrentMarketPriceForRegion = async (region) => {
  const response = await fetch(`${apiBaseUrl}/nps/price/${region}/current`);

  return await response.json();
}
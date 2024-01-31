const apiBaseUrl = 'https://dashboard.elering.ee/api/'

export const getMarketPrices = async() => {
    const from = '2024-01-28T20:59:59.999Z';
    const until = '2024-01-30T20:59:59.999Z';

    const data = new URLSearchParams({
        start: from,
        end: until,
    });

    const response =  await fetch(`${apiBaseUrl}/nps/price?${data}`);

    return await response.json();
}

export const getCurrentPrice = async() => {
    const countyCode = 'EE'

    const response = await fetch(`${apiBaseUrl}/nps/price/${countyCode}/current`);

    return await response.json();
}
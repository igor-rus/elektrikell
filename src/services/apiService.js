const apiBaseUrl = 'https://dashboard.elering.ee/api/'

export const getMarketPrices = async(from, until) => {
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
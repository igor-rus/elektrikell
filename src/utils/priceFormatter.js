import lodash from "lodash";
import { VAT, COUNTY_CODES } from "../constants";

export const mwToKw = (price) => lodash.round(parseFloat(price) / 10, 2); //eur/mWh -> cent/kWh
export const addVAT = (amount, countryCode) => lodash.round(amount * (VAT[COUNTY_CODES[countryCode]] / 100 + 1), 2);
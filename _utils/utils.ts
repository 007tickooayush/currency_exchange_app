import { API_URL, API_KEY, API_CUR, API_CWN } from "@env";
import { CurrencySingle } from "./types";

export const defaultState = {
    inputAmt: 0,
    resultAmt: 0,
    targetCurrency: 'USD',
    isLoading: false,
    currencies: null
};

export const getValidCurrencyTypes = () => API_CUR.split(',');

export const getVariables = () => {
    return {
        API_URL,
        API_KEY,
        API_CUR,
        API_CWN
    };
};

export const getCurrentExchangeDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};


export const processAPIData = (data: any): CurrencySingle[] => {
    return Object.entries(data).map(([key, value]: [string, any]) => ({
        [key]: value
    } as CurrencySingle));
};
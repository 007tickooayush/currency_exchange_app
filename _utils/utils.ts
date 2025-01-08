import { API_URL, API_KEY, API_CUR, API_CWN } from "@env";

export const defaultState = {
    inputAmt: 0,
    resultAmt: 0,
    targetCurrency: 'USD',
    isLoading:false
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

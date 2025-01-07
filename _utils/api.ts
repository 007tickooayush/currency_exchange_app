import { API_CUR, API_CWN, API_KEY, API_URL } from "@env";
import { Currency } from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentExchangeDate } from "./utils";


/**\
 * @param {void}
 * @returns {Promise<Currency>}
 * 
 * todo: implement the handler for checking the `exchange_day` and refresh the data if it's older than 1 day 
 */
export const getCurrencies = async (): Promise<Currency> => {
    let localData: Currency | string | null = await AsyncStorage.getItem('currencies');

    if (localData) {
        console.log('>>>> LOCAL PRESENT');
        return JSON.parse(localData) as Currency;
    } else {

        const queryParams = new URLSearchParams({
            "base_currency": API_CWN,
            "currencies": API_CUR
        })

        let fetchedData = await fetch(`${API_URL}?${queryParams.toString()}`, {
            method: 'GET',
            headers: {
                'apiKey': API_KEY
            },
        });

        let { data } = await fetchedData.json();
        let exchange_day = getCurrentExchangeDate();
        data = { ...data, exchange_day } as Currency;

        console.log('>>>> API CALL');
        AsyncStorage.setItem('currencies', JSON.stringify(data));
        
        return data as Currency;
    }
}
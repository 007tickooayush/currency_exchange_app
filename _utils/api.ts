import { API_CUR, API_CWN, API_KEY, API_URL } from "@env";
import { Currencies } from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentExchangeDate, processAPIData } from "./utils";


/**\
 * @param {void}
 * @returns {Promise<Currencies>}
 * 
 * todo: implement the handler for checking the `exchange_day` and refresh the data if it's older than 1 day 
 */
export const getCurrencies = async (): Promise<Currencies> => {
    let localData: Currencies | string | null = await AsyncStorage.getItem('currencies');

    if (localData) {
        console.log('>>>> LOCAL PRESENT');
        return JSON.parse(localData) as Currencies;
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
        
        let processedData = processAPIData(data);

        let currencies: Currencies = {
            currencies: processedData,
            exchange_day
        };
        console.log('>>>> API CALL');
        AsyncStorage.setItem('currencies', JSON.stringify(currencies));
        
        return currencies;
    }
}
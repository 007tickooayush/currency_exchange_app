import { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { getCurrencies } from "../_utils/api";
import { Currency } from "../_utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App(): React.JSX.Element {

	useEffect(() => {
		// AsyncStorage.removeItem('currencies');

		getCurrencies().then((data: Currency) => {
			console.log('API RETURNED vals: (data.USD, data.EUR, data.exchange_day) >>', data.USD, data.EUR, data.exchange_day);
		}).catch(err => {
			console.log('API ERROR : >>',err);
		});
	}, []);

	return (
		<SafeAreaView>
			<StatusBar />

		</SafeAreaView>
	);
}

export default App;

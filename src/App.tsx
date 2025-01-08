import { useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { getCurrencies } from "../_utils/api";
import { Currency } from "../_utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrencyTile from "./currency/CurrencyTile";
import { primaryBgColor, secondaryBgColor, styles } from "../_utils/styles";

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
			<View style={styles.mainContainer}>
				<StatusBar backgroundColor={secondaryBgColor}/>
				<CurrencyTile />
			</View>
		</SafeAreaView>
	);
}

export default App;

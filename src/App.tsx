import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { getCurrencies } from "../_utils/api";
import { Currencies, CurrTile } from "../_utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrencyTile from "./currency/CurrencyTile";
import { primaryBgColor, secondaryBgColor, styles } from "../_utils/styles";
import { defaultState } from "../_utils/utils";
import Snackbar from "react-native-snackbar";

function App(): React.JSX.Element {
	const [inputAmt, setInputAmt] = useState(defaultState.inputAmt);
	const [resultAmt, setResultAmt] = useState(defaultState.resultAmt);
	const [targetCurrency, setTargetCurrency] = useState(defaultState.targetCurrency);

	const [isLoading, setIsLoading] = useState(defaultState.isLoading);
	
	useEffect(() => {
		// AsyncStorage.removeItem('currencies');

		getCurrencies().then((data: Currencies) => {
			console.log('API RETURNED vals: (data.USD, data.EUR, data.exchange_day) >>', data.USD, data.EUR, data.exchange_day);
		}).catch(err => {
			console.log('API ERROR : >>',err);
		});
	}, []);


	const isButtonPressed = (targetCurrency: CurrTile) => {
		if(!inputAmt) {
			return Snackbar.show({
				text: 'Please enter a valid amount',
				duration: Snackbar.LENGTH_SHORT,
				backgroundColor: '#FF0000'
			})
		}
	};

	return (
		<SafeAreaView>
			<View style={styles.mainContainer}>
				<StatusBar backgroundColor={secondaryBgColor}/>
				<CurrencyTile target="USD" base="INR" value={0.122}/>
				{/* <CurrencyTile />
				<CurrencyTile />
				<CurrencyTile />
				<CurrencyTile />
				<CurrencyTile />
				<CurrencyTile /> */}
			</View>
		</SafeAreaView>
	);
}

export default App;

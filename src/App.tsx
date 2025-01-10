import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { getCurrencies } from "../_utils/api";
import { Currencies, CurrencySingle, CurrTile } from "../_utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CurrencyTile from "./currency/CurrencyTile";
import { primaryBgColor, secondaryBgColor, styles } from "../_utils/styles";
import { defaultState, getVariables } from "../_utils/utils";
import Snackbar from "react-native-snackbar";
import LoadingComp from "./LoadingComp";

/**
 * Importing the Environment variables used in the appliaction
 */
const { API_CWN } = getVariables();

function App(): React.JSX.Element {
	const [inputAmt, setInputAmt] = useState(defaultState.inputAmt);
	const [resultAmt, setResultAmt] = useState(defaultState.resultAmt);
	const [targetCurrency, setTargetCurrency] = useState<string>(defaultState.targetCurrency);

	const [isLoading, setIsLoading] = useState(defaultState.isLoading);

	const [currencies, setCurrencies] = useState<Currencies | null>(defaultState.currencies);

	useEffect(() => {
		// AsyncStorage.removeItem('currencies');

		getCurrencies().then((data: Currencies) => {
			setIsLoading(true);

			setTimeout(() => {
				console.log('RETURNED vals: (data.curencies[0], data.exchange_day) >>', data.currencies[0], data.exchange_day);
				setCurrencies(data);
				setIsLoading(false);
				// console.log('data :>> ', data);
			}, 2000);

		}).catch(err => {
			console.log('API ERROR : >>', err);
		});
	}, []);


	const isButtonPressed = (targetCurrency: CurrencySingle) => {
		if (!inputAmt) {
			return Snackbar.show({
				text: 'Please enter a valid amount',
				duration: Snackbar.LENGTH_SHORT,
				backgroundColor: '#FF0000'
			})
		}
	};


	return (
		<SafeAreaView style={{ backgroundColor: primaryBgColor }}>
			<StatusBar backgroundColor={secondaryBgColor} />
			<LoadingComp loading={isLoading}>
				<View style={styles.mainContainer}>
					<View style={styles.headerContainer}>
						<Text style={[styles.curHeadingText]}>Exchange Rates As Per Base Currency: {API_CWN}</Text>
						<TextInput
							onChangeText={(text) => setInputAmt(Number(text))}
							value={inputAmt ? inputAmt.toString(): ''}
							placeholder="Enter Amount"
							keyboardType="number-pad"
							maxLength={12}
							textAlign="center"
							style={[styles.inputField]}
						/>
						
					</View>
					<FlatList
						data={currencies?.currencies}
						numColumns={3}
						columnWrapperStyle={{flexWrap: 'wrap', justifyContent: 'center'}}
						scrollEnabled={true}
						keyExtractor={(el, idx) => Object.keys(el).flat()[0]}
						renderItem={({ item }) => {
							let [currency, rate] = Object.entries(item).flat();
							return <CurrencyTile
								base={API_CWN}
								target={currency as string}
								value={rate as number}
								isButtonPressed={() => isButtonPressed(item)}
							/>
						}}
						contentContainerStyle={styles.scrollContainer}
						style={{height: 300}}
					/>
					<View>
						<Text style={[styles.resultAmount]}> INR to {targetCurrency}: {resultAmt}</Text>
					</View>
				</View>
			</LoadingComp>
		</SafeAreaView>
	);
}

export default App;

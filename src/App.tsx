import { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { logVariables } from "../_utils/utils";

function App(): React.JSX.Element {

	useEffect(() => {
		logVariables();
	}, []);

	return (
		<SafeAreaView>
			<StatusBar />

		</SafeAreaView>
	);
}

export default App;

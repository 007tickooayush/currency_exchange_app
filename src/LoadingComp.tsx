import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../_utils/styles';
import Snackbar from 'react-native-snackbar';

const LoadingComp = () => {

    /**
     * testing snackbar
     */
    useEffect(() => {
        Snackbar.show({
            text: 'Loading data',
            duration: Snackbar.LENGTH_SHORT,
            textColor: 'white',
            backgroundColor: 'grey',
            rtl: true 
        });
    }, []);

    return (
        <View>
            <Text style={styles.curHeadingText}>Loading data</Text>
        </View>
    )
}

export default LoadingComp;
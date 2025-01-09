import { View, Text } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { styles } from '../_utils/styles';
import Snackbar from 'react-native-snackbar';
import LoadingDots from 'react-native-loading-dots';

type LoadingCompProps = {
    loading: boolean;
    children: React.ReactNode
}

const LoadingComp = ({ loading, children }: LoadingCompProps) => {

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
        <>
            {
                loading ? (
                    <View style={styles.loadingContainer}>
                        <Text style={styles.curHeadingText}>LOADING</Text>
                        <View style={styles.loadingDotsWrapper}>
                            <LoadingDots />
                        </View>
                    </View>
                ) : (
                    <>{children}</>
                )
            }
        </>
    )
}

export default LoadingComp;
import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../_utils/styles';

type CurrencyTileProps = {

};

const CurrencyTile = ({}: CurrencyTileProps) => {
    return (
        <View style={styles.curTileContainer}>
            <Text style={[styles.curHeadingText]}>CurrencyTile</Text>
            <Text style={[styles.curSubtitleText]}>CurrencyTile subtitle</Text>
        </View>
    )
}

export default CurrencyTile;
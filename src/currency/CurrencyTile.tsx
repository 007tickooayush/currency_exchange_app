import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../_utils/styles';
import { CurrTile } from '../../_utils/types';


const CurrencyTile = ({ target, base, value, description }: CurrTile) => {
    return (
        <View style={styles.curTileContainer}>
            <Text style={[styles.curHeadingText]}>{target}</Text>
            <Text style={[styles.curSubtitleText]}>{value} / {base}</Text>
            {
                description &&
                <Text style={[styles.curSubtitleText]}>{description}</Text>
            }
        </View>
    )
}

export default CurrencyTile;
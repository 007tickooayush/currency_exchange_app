import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../_utils/styles';
import { CurrencySingle, CurrTile } from '../../_utils/types';


const CurrencyTile = ({ target, base, value, description, isButtonPressed }: CurrTile) => {
    return (
        <Pressable
            style={styles.curTileContainerPressable}
            onPress={(e) => isButtonPressed({ [target]: value } as CurrencySingle)}
        >
            <View style={styles.curTileContainer}>
                <Text style={[styles.curHeadingText]}>{target}</Text>
                <Text style={[styles.curSubtitleText]}>{value?.toFixed(3)} / {base}</Text>
                {
                    description &&
                    <Text style={[styles.curSubtitleText]}>{description}</Text>
                }
            </View>
        </Pressable>
    )
}

export default CurrencyTile;
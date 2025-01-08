

import { StyleSheet } from 'react-native';

export const primaryBgColor = '#151B25';
export const secondaryBgColor = '#214358';

export const primaryBtnColor = '#AEB8C4';
export const secondaryBtnColor = '#9CA6B8';

export const primaryTxtColor = '#E3E7F1';
export const secondaryTxtColor = '#BDC6D9';


export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: primaryBgColor,
        height: '100%',
        flexWrap: 'wrap',
        padding: 12
    },
    curTileContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // minHeight: 100,
        // width: 200,
        minHeight: '10%',
        minWidth: '30%',
        borderColor: secondaryTxtColor,
        borderWidth: 2,
        borderRadius: 20,
        margin: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: secondaryBtnColor
    },
    curHeadingText: {
        color: primaryTxtColor,
        fontSize: 24,
    },
    curSubtitleText: {
        color: secondaryTxtColor,
        fontSize: 16,
    }

});


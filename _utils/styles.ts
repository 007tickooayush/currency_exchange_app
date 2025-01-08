

import { StyleSheet } from 'react-native';

export const primaryBgColor = '#F56416';
export const secondaryBgColor = '#E28413';

export const primaryBtnColor = '#DD4B1A';
export const secondaryBtnColor = '#FCCA46';

export const primaryTxtColor = '#FEFFEA';
export const secondaryTxtColor = '#E4E4DA';


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: primaryBgColor,
        height: 'auto'
    },
    curTileContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 100,
        width: 200,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: primaryBtnColor
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


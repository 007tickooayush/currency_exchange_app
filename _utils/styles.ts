

import { StyleSheet } from 'react-native';

export const primaryBgColor = '#151B25';
export const secondaryBgColor = '#214358';

export const primaryBtnColor = '#AEB8C4';
export const secondaryBtnColor = '#9CA6B8';

export const primaryTxtColor = '#E3E7F1';
export const secondaryTxtColor = '#BDC6D9';


export const styles = StyleSheet.create({
    mainContainer: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // flexDirection: 'row',
        backgroundColor: primaryBgColor,
        height: '100%',
        // flexWrap: 'wrap',
        padding: 12
    },
    scrollContainer: {
        backgroundColor: primaryBgColor,
        // padding: 12
        alignItems: 'center',
        // height: 300
    },
    headerContainer: {
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        marginVertical: 8,
    },
    resultAmount: {
        color: primaryTxtColor,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 2,
    },
    inputField: {
        backgroundColor: secondaryBgColor,
        color: primaryTxtColor,
        width: 200,
        height: 60,
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 2,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 18,
    },
    curTileContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 60,
        width: 100,
        // minHeight: '10%',
        // minWidth: '30%',
        // maxHeight: '10%',
        // maxWidth: '30%',
        borderColor: secondaryTxtColor,
        borderWidth: 2,
        borderRadius: 20,
        margin: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: secondaryBtnColor
    },
    curTileContainerPressable: {

    },
    curHeadingText: {
        color: primaryTxtColor,
        fontSize: 16,
        textAlign: 'center',
    },
    curSubtitleText: {
        color: secondaryTxtColor,
        fontSize: 10,
    },
    loadingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    loadingDotsWrapper: {
        width: 100,
        paddingTop:16
    },
    

});


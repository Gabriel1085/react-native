import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    result: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 15,
    },
    containerCalc: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end',
    },
    smallResult: {
        fontSize: 30,
        textAlign: 'right',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#9b9b9b',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    bgColorDarkGray: {
        backgroundColor: '#2d2d2d',
    },
    bgColorOrange: {
        backgroundColor: '#ff9427',
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    colorWhite: {
        color: 'white',
    },
});

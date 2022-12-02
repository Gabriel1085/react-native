import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';
import React from 'react';

export const CalculadoraScreen = () => {

    const {
        number,
        smallNumber,
        add,
        divide,
        multiply,
        rest,
        handleOperation,
        buildNumber,
        calculate,
        clean,
        cleanOneNumber,
        invertNumber,
    } = useCalculator();

    return (
        <View style = {styles.containerCalc}>

            {
                smallNumber !== '0' && <Text style = {styles.smallResult}> {smallNumber} </Text>
            }

            <Text
                style = {styles.result}
                numberOfLines = { 1 }
                adjustsFontSizeToFit
            >
                { number }
            </Text>

            <View style = {styles.row}>
                <Button label= "C" action = {clean} />
                <Button label= "+/-" action = {invertNumber}/>
                <Button label= "del" action = {cleanOneNumber} />
                <Button label= "/" bgColor="orange" color="white" action = {() => handleOperation(divide)} />
            </View>

            <View style = {styles.row}>
                <Button label= "7" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "8" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "9" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "X" bgColor="orange" color="white" action = {() => handleOperation(multiply)} />
            </View>

            <View style = {styles.row}>
                <Button label= "4" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "5" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "6" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "-" bgColor="orange" color="white" action = {() => handleOperation(rest)} />
            </View>

            <View style = {styles.row}>
                <Button label= "3" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "2" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "1" action = { buildNumber } bgColor="darkGray" color="white" />
                <Button label= "+" bgColor="orange" color="white" action = {() => handleOperation(add)} />
            </View>

            <View style = {styles.row}>
                <Button label= "0" action = { buildNumber } bgColor="darkGray" color="white" large />
                <Button label= "." bgColor="darkGray" color="white" action = {buildNumber} />
                <Button label= "=" bgColor="darkGray" color="white" action = {calculate}/>
            </View>


        </View>
    );
};

import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';


export const CounterScreen = () => {

    const [counter, setCounter] = useState(1);
    const { width, height } = useWindowDimensions();

    return (
        <View style= { [styles.container] }>
            <Text style = {styles.title}>
                Contador: {counter}
            </Text>

            <Text>
                'width: {width} height: {height} '
            </Text>

            <Fab
                title = "+1"
                onPress = {() => setCounter(counter + 1)}
            />

            <Fab
                title = "-1"
                position = "bl"
                onPress = {() => setCounter(counter - 1)}
                color = "red"
            />



            {/* <TouchableOpacity
                onPress = {() => setCounter(counter - 1)}
                style={styles.tbContainerLeft}
            >
                <View
                    style = {[styles.buttonContainer, styles.buttonContainerRed]}
                >
                    <Text style = {styles.buttonLabel}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
});

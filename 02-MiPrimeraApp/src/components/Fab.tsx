import React from 'react';
import { TouchableOpacity, Platform, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
    color?: 'red' | 'violet'
}

export const Fab = ({ title, onPress, position = 'br', color = 'violet' }: Props) => {

    const android = () => {
        return (
            <View
                style={[
                    styles.tbContainer,
                    position === 'br' ? styles.tbContainerRight : styles.tbContainerLeft,
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425b', false, 25)}
                >
                    <View
                        style={[
                            styles.buttonContainer,
                            color === 'violet' ? styles.buttonContainerViolet : styles.buttonContainerRed,
                        ]}
                    >
                        <Text style={styles.buttonLabel}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    const ios = () => {
        return (
            <TouchableOpacity
                style={[
                    styles.tbContainer,
                    position === 'br' ? styles.tbContainerRight : styles.tbContainerLeft,
                ]}
                activeOpacity={0.75}
                onPress={onPress}
            >

                <View
                    style={[styles.buttonContainer, styles.buttonContainerViolet]}
                >
                    <Text style={styles.buttonLabel}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
    },
    buttonContainerViolet: {
        backgroundColor: '#5856d6',
    },
    buttonContainerRed: {
        backgroundColor: 'red',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
    tbContainer: {
        position: 'absolute',
        bottom: 25,
    },
    tbContainerLeft: {
        left: 25,
    },
    tbContainerRight: {
        right: 25,
    },
});

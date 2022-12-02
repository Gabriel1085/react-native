import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    'label': string,
    'bgColor'?: 'darkGray' | 'orange',
    'color'?: 'white',
    'large'?: boolean,
    action: ( option: string ) => void,
}

export const Button = ({ label, bgColor, color, large, action }: Props) => {


    return (
        <TouchableOpacity
            onPress={() => action(label)}
        >
            <View style={[
                styles.button,
                bgColor === 'orange' ? styles.bgColorOrange : bgColor === 'darkGray' ? styles.bgColorDarkGray : null,
                { width: large ? 180 : 80 },
            ]}>
                <Text style={[styles.textButton, color === 'white' ? styles.colorWhite : null]}> {label} </Text>
            </View>
        </TouchableOpacity>
    );
};

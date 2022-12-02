import React from 'react';
import { SafeAreaView } from 'react-native';
import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';



export const App = () => {
    return (
        // <HolaMundoScreen/>
        <SafeAreaView style = {{
            flex: 1,
        }}>
            <CounterScreen/>
        </SafeAreaView>
    );
};

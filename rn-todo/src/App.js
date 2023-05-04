import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from './colors';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { useState } from 'react';

const App = () => {
    const [user, setUser] = useState(null);
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            {user ? <MainStack /> : <AuthStack setUser={setUser} />}
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
});

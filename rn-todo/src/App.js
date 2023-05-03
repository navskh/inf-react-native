import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from './colors';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <AuthStack />
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

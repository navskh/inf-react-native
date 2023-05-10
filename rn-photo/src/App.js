import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations';
import { useEffect, useState } from 'react';
import { UserProvider } from './contexts/UserContext';

const App = () => {
    LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

    return (
        <UserProvider>
            <StatusBar style={'dark'} />
            <Navigation />
        </UserProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;

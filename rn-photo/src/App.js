import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations';
import { useEffect, useState } from 'react';
import { UserProvider } from './contexts/UserContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

const App = () => {
    LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

    return (
        <ActionSheetProvider>
            <UserProvider>
                <StatusBar style={'dark'} />
                <Navigation />
            </UserProvider>
        </ActionSheetProvider>
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

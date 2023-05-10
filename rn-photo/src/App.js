import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import { initFirebase } from './api/firebase';

const App = () => {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                // Image 캐싱
                await Asset.fromModule(require('../assets/cover.png')).downloadAsync();

                // firebase
                initFirebase();
            } catch (error) {
                console.log(error);
            } finally {
                setIsReady(true);
            }
        })();
    }, []);

    if (!isReady) {
        return null;
    }

    const onReady = async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    };

    return (
        <View style={{ flex: 1 }} onLayout={onReady}>
            <StatusBar style={'dark'} />
            <Navigation />
        </View>
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

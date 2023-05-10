import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useUserState } from '../contexts/UserContext';
import MainStack from './MainStack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '../api/auth';
import * as SplashScreen from 'expo-splash-screen';
import { initFirebase } from './../api/firebase';
import { Asset } from 'expo-asset';
import ContentTab from './ContentTab';

const ImageAssets = [
    require('../../assets/cover.png'),
    require('../../assets/home-clock.png'),
    require('../../assets/home-map.png'),
    require('../../assets/icon.png'),
];

const Navigation = () => {
    const [user, setUser] = useUserState();

    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                // Image 캐싱
                await Promise.all(ImageAssets.map((image) => Asset.fromModule(image).downloadAsync()));

                // firebase
                initFirebase();

                const unsubscribe = onAuthStateChanged((user) => {
                    if (user) {
                        setUser(user);
                    }
                    setIsReady(true);
                    unsubscribe();
                });
            } catch (error) {
                console.log(error);
                setIsReady(true);
            }
        })();
    }, [setUser]);

    if (!isReady) {
        return null;
    }

    const onReady = async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    };

    return <NavigationContainer onReady={onReady}>{user.uid ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

export default Navigation;

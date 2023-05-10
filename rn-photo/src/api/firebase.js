import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

export const initFirebase = () => {
    try {
        const app = initializeApp(firebaseConfig);
        initializeAuth(app, {
            persistence: getReactNativePersistence(AsyncStorage),
        });
        return app;
    } catch (error) {
        console.log(error);
    }
};

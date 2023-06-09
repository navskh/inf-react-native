import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthRoute } from './routes';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: WHITE },
                headerShown: false,
            }}
        >
            <Stack.Screen name={AuthRoute.SIGN_IN} component={SignInScreen}></Stack.Screen>
            <Stack.Screen name={AuthRoute.SIGN_UP} component={SignUpScreen}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthStack;

import { PRIMARY, WHITE } from '../colors';
import SignInScreen from '../screens/SigninScreen';
const { createNativeStackNavigator } = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                contentStyle: {
                    backgroundColor: WHITE,
                },
            }}
        >
            <Stack.Screen
                name={'SignIn'}
                options={{
                    headerShown: false,
                }}
                component={SignInScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;

import { PRIMARY, WHITE } from '../colors';
import SignInScreen from '../screens/SigninScreen';
const { createNativeStackNavigator } = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
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
            >
                {/* screenProps안에는 navigation 과 route 정보가 있음 */}
                {(screenProps) => <SignInScreen {...screenProps} {...props}></SignInScreen>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthStack;

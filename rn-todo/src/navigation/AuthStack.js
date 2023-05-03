import { Pressable, Text } from 'react-native';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SigninScreen';
import { useNavigation } from '@react-navigation/native';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';
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
                headerTitleAlign: 'center',
                headerTintColor: PRIMARY.DEFAULT,
                headerTitleStyle: {
                    fontWeight: '700',
                },
                title: 'ToDo List',
                headerBackTitleVisible: false,
                headerLeft: HeaderLeftButton,
            }}
        >
            <Stack.Screen
                name={'List'}
                component={ListScreen}
                options={{
                    headerRight: HeaderRightButton,
                }}
            />
            <Stack.Screen
                name={'SignIn'}
                component={SignInScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name={'Settings'} component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;

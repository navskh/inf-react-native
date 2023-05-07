import { Pressable, Text } from 'react-native';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import { useNavigation } from '@react-navigation/native';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';
const { createNativeStackNavigator } = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: WHITE,
                },
                headerTitleAlign: 'center',
                headerTintColor: PRIMARY.DEFAULT,
                headerTitleStyle: {
                    fontWeight: '700',
                },
                headerBackTitleVisible: false,
                headerLeft: HeaderLeftButton,
            }}
        >
            <Stack.Screen
                name={'List'}
                component={ListScreen}
                options={{
                    title: 'ToDo List',
                    headerRight: HeaderRightButton,
                }}
            />
            <Stack.Screen name={'Settings'} component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;

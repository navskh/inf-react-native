import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRoutes } from './routes';
import { WHITE } from '../colors';
import ContentTab from './ContentTab';
import SelectPhotoScreen from '../screens/SelectPhotosScreens';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import HeaderLeft from '../components/HeaderLeft';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ contentStyle: { backgroundColor: WHITE }, title: '', headerLeft: HeaderLeft }}
        >
            <Stack.Screen name={MainRoutes.CONTENT_TAB} component={ContentTab} options={{ headerShown: false }} />
            <Stack.Screen name={MainRoutes.SELECT_PHOTOS} component={SelectPhotoScreen} />
            <Stack.Screen name={MainRoutes.UPDATE_PROFILE} component={UpdateProfileScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;

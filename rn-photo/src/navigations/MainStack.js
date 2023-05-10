import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRoutes } from './routes';
import { WHITE } from '../colors';
import ContentTab from './ContentTab';
import SelectPhotoScreen from '../screens/SelectPhotosScreens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: WHITE }, headerShown: false }}>
            <Stack.Screen name={MainRoutes.CONTENT_TAB} component={ContentTab} />
            <Stack.Screen name={MainRoutes.SELECT_PHOTOS} component={SelectPhotoScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;

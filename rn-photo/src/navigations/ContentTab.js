import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContentRoutes } from './routes';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MapScreen from '../screens/MapScreen';
import ListScreen from '../screens/ListScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, PRIMARY } from '../colors';
import TabBarAddButton from '../components/TabBarAddButton';

const Tab = createBottomTabNavigator();

const getTabBarIcon = ({ focused, color, size, name }) => {
    const iconName = focused ? name : `${name}-outline`;
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

const AddButton = () => {};

const ContentTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={ContentRoutes.PROFILE}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: PRIMARY.DARK,
                tabBarInactiveTintColor: GRAY.DARK,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name={ContentRoutes.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'home' }),
                }}
            />
            <Tab.Screen
                name={ContentRoutes.LIST}
                component={ListScreen}
                options={{ tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'post' }) }}
            />
            <Tab.Screen
                name={'AddButton'}
                component={AddButton}
                options={{ tabBarButton: () => <TabBarAddButton /> }}
            />
            <Tab.Screen
                name={ContentRoutes.MAP}
                component={MapScreen}
                options={{ tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'map' }) }}
            />
            <Tab.Screen
                name={ContentRoutes.PROFILE}
                component={ProfileScreen}
                options={{ tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'account' }) }}
            />
        </Tab.Navigator>
    );
};

export default ContentTab;

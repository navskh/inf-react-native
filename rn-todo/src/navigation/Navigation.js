import UserContext, { userUserContext } from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Navigation = () => {
    const { user } = userUserContext();
    return <NavigationContainer>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

export default Navigation;

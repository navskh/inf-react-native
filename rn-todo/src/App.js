import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigation/Navigation';

const App = () => {
    return (
        <UserProvider>
            <StatusBar style="dark" />
            <Navigation></Navigation>
        </UserProvider>
    );
};

export default App;

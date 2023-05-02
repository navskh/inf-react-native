import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SigninScreen';
import { WHITE } from './colors';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <SignInScreen></SignInScreen>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
});

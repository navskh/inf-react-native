import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { AuthRoute } from '../navigations/routes';
import Input, { InputTypes, KeyboardTypes } from '../components/Input';
import { useState } from 'react';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignInScreen</Text>
            <Button title="signup" onPress={() => navigation.navigate(AuthRoute.SIGN_UP)}></Button>
            <Input
                inputType={InputTypes.EMAIL}
                value={email}
                onChangeText={(text) => setEmail(text.trim())}
                styles={inputStyle}
            ></Input>
            <Input
                inputType={InputTypes.PASSWORD}
                value={password}
                onChangeText={(text) => setPassword(text.trim())}
                styles={inputStyle}
            ></Input>
        </View>
    );
};

SignInScreen.propTypes = {};

const inputStyle = StyleSheet.create({
    container: { paddingHorizontal: 20, marginBottom: 20 },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
});
export default SignInScreen;

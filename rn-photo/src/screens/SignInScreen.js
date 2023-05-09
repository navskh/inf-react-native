import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { AuthRoute } from '../navigations/routes';
import Input, { InputTypes, KeyboardTypes } from '../components/Input';
import { useEffect, useRef, useState } from 'react';
import Button from './../components/Button';
import SafeInputView from '../components/SafeInputView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Keyboard } from 'react-native';
import TextButton from './../components/TextButton';
import HR from './../components/HR';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { top } = useSafeAreaInsets();
    const passwordRef = useRef(null);
    const [isLoading, setisLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(!email || !password);
    }, [email, password]);

    const onSubmit = () => {
        Keyboard.dismiss();
        if (!disabled && !isLoading) {
            setisLoading(true);
            console.log(email, password);
            setisLoading(false);
        }
    };

    return (
        <SafeInputView>
            <View style={[styles.container, { paddingTop: top }]}>
                <Input
                    inputType={InputTypes.EMAIL}
                    value={email}
                    onChangeText={(text) => setEmail(text.trim())}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    styles={{ container: { marginBottom: 20 } }}
                ></Input>
                <Input
                    ref={passwordRef}
                    inputType={InputTypes.PASSWORD}
                    value={password}
                    onChangeText={(text) => setPassword(text.trim())}
                    onSubmitEditing={onSubmit}
                    styles={{ container: { marginBottom: 20 } }}
                ></Input>
                <Button
                    title="SIGNIN"
                    onPress={onSubmit}
                    disabled={disabled}
                    isLoading={isLoading}
                    styles={{
                        container: {
                            marginTop: 20,
                        },
                    }}
                ></Button>
                <HR text={'OR'} styles={{ container: { marginVertical: 20 } }} />
                <TextButton
                    title={'SIGNUP'}
                    onPress={() => {
                        navigation.navigate(AuthRoute.SIGN_UP);
                    }}
                />
            </View>
        </SafeInputView>
    );
};

SignInScreen.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
    },
});
export default SignInScreen;

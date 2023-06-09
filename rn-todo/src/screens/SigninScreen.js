import { View, StyleSheet, Text, Image, KeyboardAvoidingView, Pressable, Keyboard, Alert } from 'react-native';
import Input, { IconNames, KeyboardTypes, ReturnkeyTypes } from '../components/Input';
import SafeInputView from '../components/SafeIputView';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { signIn } from '../../api/auth';
import PropTypes from 'prop-types';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import UserContext, { useUserContext } from '../contexts/UserContext';

const SignInScreen = () => {
    const [email, setEmail] = useState('my@email.com');
    const [password, setPassword] = useState('1234');
    const passwordRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setisLoading] = useState(false);
    const onSubmit = async () => {
        if (!disabled && !isLoading) {
            Keyboard.dismiss();
            setisLoading(true);
            try {
                const data = await signIn(email, password);
                setUser(data);
            } catch (e) {
                Alert.alert('SignIn Failed', e, [
                    {
                        text: 'OK',
                        onPress: () => {
                            setisLoading(false);
                        },
                    },
                ]);
            }
        }
    };

    useEffect(() => {
        setDisabled(!email || !password);
    }, [email, password]);

    const insets = useSafeAreaInsets();

    const { setUser } = useUserContext();
    return (
        <SafeInputView>
            <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
                <Image source={require('../../assets/main.png')} style={styles.image} resizeMode="cover"></Image>
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text.trim())}
                    title={'email'}
                    placeholder={'your@email.com'}
                    keyboardType={KeyboardTypes.EMAIL}
                    returnkeyType={ReturnkeyTypes.NEXT}
                    iconName={IconNames.EMAIL}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    multiline={false}
                ></Input>
                <Input
                    ref={passwordRef}
                    value={password}
                    onChangeText={(text) => setPassword(text.trim())}
                    title={'password'}
                    placeholder={''}
                    secureTextEntry
                    iconName={IconNames.PASSWORD}
                    onSubmitEditing={onSubmit}
                ></Input>
                <View style={styles.buttonContainer}>
                    <Button title={'SIGNIN'} onPress={onSubmit} disabled={disabled} isLoading={isLoading}></Button>
                </View>
            </View>
        </SafeInputView>
    );
};

SignInScreen.propTypes = {
    setUser: PropTypes.func,
};

const styles = StyleSheet.create({
    avoid: {
        flex: 3,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

export default SignInScreen;

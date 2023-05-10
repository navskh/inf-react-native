import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { AuthRoute } from '../navigations/routes';
import Input, { InputTypes, KeyboardTypes, ReturnkeyTypes } from '../components/Input';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import Button from './../components/Button';
import SafeInputView from '../components/SafeInputView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Keyboard } from 'react-native';
import TextButton from './../components/TextButton';
import HR from './../components/HR';
import { StatusBar } from 'expo-status-bar';
import { WHITE } from '../colors';
import { useFocusEffect } from '@react-navigation/native';
import { AuthFormTypes, authFormReducer, initAuthForm } from '../reducers/authFormReducer';
import { getAuthErrorMessage, signIn } from '../api/auth';
import { useUserState } from '../contexts/UserContext';

const SignInScreen = ({ navigation }) => {
    const { top, bottom } = useSafeAreaInsets();
    const passwordRef = useRef(null);
    const [form, dispatch] = useReducer(authFormReducer, initAuthForm);
    const [, setUser] = useUserState();

    const onSubmit = async () => {
        Keyboard.dismiss();
        if (!form.disabled && !form.isLoading) {
            dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
            try {
                const user = await signIn(form);
                setUser(user);
            } catch (error) {
                const message = getAuthErrorMessage(error.code);
                Alert.alert('회원가입 실패', message, [
                    { text: '확인', onPress: () => dispatch({ type: AuthFormTypes.TOGGLE_LOADING }) },
                ]);
            }
        }
    };

    useFocusEffect(
        useCallback(() => {
            return () => dispatch({ type: AuthFormTypes.RESET });
        }, [])
    );

    const updateForm = (payload) => {
        const newForm = { ...form, ...payload };
        const disabled = !newForm.email || !newForm.password;

        dispatch({ type: AuthFormTypes.UPDATE_FORM, payload: { disabled: disabled, ...payload } });
    };

    return (
        <SafeInputView>
            <StatusBar style="light" />
            <View style={[styles.container, { paddingTop: top }]}>
                <View style={StyleSheet.absoluteFillObject}>
                    <Image
                        source={require('../../assets/cover.png')}
                        style={{ width: '100%' }}
                        resizeMode="cover"
                    ></Image>
                </View>
                <ScrollView
                    style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
                    contentContainerStyle={{ alignItems: 'center' }}
                    bounces={false}
                    keyboardShouldPersistTaps={'always'}
                >
                    <Input
                        inputType={InputTypes.EMAIL}
                        value={form.email}
                        onChangeText={(text) => updateForm({ email: text.trim() })}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        styles={{ container: { marginBottom: 20 } }}
                        returnKeyType={ReturnkeyTypes.NEXT}
                    ></Input>
                    <Input
                        ref={passwordRef}
                        inputType={InputTypes.PASSWORD}
                        value={form.password}
                        onChangeText={(text) => updateForm({ password: text.trim() })}
                        onSubmitEditing={onSubmit}
                        styles={{ container: { marginBottom: 20 } }}
                        returnKeyType={ReturnkeyTypes.DONE}
                    ></Input>
                    <Button
                        title="SIGNIN"
                        onPress={onSubmit}
                        disabled={form.disabled}
                        isLoading={form.isLoading}
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
                </ScrollView>
            </View>
        </SafeInputView>
    );
};

SignInScreen.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 30,
    },
    form: {
        flexGrow: 0,
        backgroundColor: WHITE,
        paddingHorizontal: 20,
        paddingTop: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
export default SignInScreen;

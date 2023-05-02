import {
    View,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView,
    Pressable,
    Keyboard,
} from 'react-native';
import Input, {
    IconNames,
    KeyboardTypes,
    ReturnkeyTypes,
} from '../components/Input';
import SafeInputView from './SafeIputView';
import { useRef, useState } from 'react';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const onSubmit = () => {
        console.log('onSubmit');
    };

    return (
        <SafeInputView>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/main.png')}
                    style={styles.image}
                    resizeMode="cover"
                ></Image>
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text.trim())}
                    title={'email'}
                    placeholder={'your@email.com'}
                    keyboardType={KeyboardTypes.EMAIL}
                    returnkeyType={ReturnkeyTypes.NEXT}
                    iconName={IconNames.EMAIL}
                    onSubmitEditing={() => passwordRef.current.focus()}
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
            </View>
        </SafeInputView>
    );
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
});

export default SignInScreen;

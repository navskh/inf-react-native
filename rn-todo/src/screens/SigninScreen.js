import { View, StyleSheet, Text, Image } from 'react-native';
import Input, { KeyboardTypes, ReturnkeyTypes } from '../components/Input';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/main.png')}
                style={styles.image}
                resizeMode="cover"
            ></Image>
            <Input
                title={'email'}
                placeholder={'your@email.com'}
                keyboardType={KeyboardTypes.EMAIL}
                returnkeyType={ReturnkeyTypes.NEXT}
            ></Input>
            <Input title={'password'} placeholder={''} secureTextEntry></Input>
        </View>
    );
};

const styles = StyleSheet.create({
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

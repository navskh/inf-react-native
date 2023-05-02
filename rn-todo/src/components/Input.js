import { TextInput, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL: 'email-address',
};

export const ReturnkeyTypes = {
    DONE: 'done',
    NEXT: 'next',
};

const Input = ({
    title,
    placeholder,
    keyboardType,
    returnkeyType,
    secureTextEntry,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder ?? title}
                placeholderTextColor={'#a3a3a3'}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={keyboardType}
                returnKeyType={returnkeyType}
                textContentType="none"
                secureTextEntry={secureTextEntry}
            ></TextInput>
        </View>
    );
};

Input.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
    returnKeyType: PropTypes.oneOf(Object.values(ReturnkeyTypes)),
    secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        height: 42,
    },
});

export default Input;

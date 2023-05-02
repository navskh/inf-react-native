import { TextInput, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { forwardRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL: 'email-address',
};

export const ReturnkeyTypes = {
    DONE: 'done',
    NEXT: 'next',
};

export const IconNames = {
    EMAIL: 'email',
    PASSWORD: 'lock',
};

const Input = forwardRef(
    (
        {
            title,
            placeholder,
            value,
            onChangeText,
            keyboardType,
            returnkeyType,
            iconName,
            secureTextEntry,
        },
        ref
    ) => {
        const [isFocued, setIsFocused] = useState(false);
        return (
            <View style={styles.container}>
                <Text
                    style={[
                        styles.title,
                        value && styles.hasValueTitle,
                        isFocued && styles.focusedTitle,
                    ]}
                >
                    {title}
                </Text>
                <View>
                    <TextInput
                        ref={ref}
                        value={value}
                        onChangeText={onChangeText}
                        style={[styles.input, isFocued && styles.focusedTitle]}
                        placeholder={placeholder ?? title}
                        placeholderTextColor={GRAY.DEFAULT}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType={keyboardType}
                        returnKeyType={returnkeyType}
                        textContentType="none"
                        secureTextEntry={secureTextEntry}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                    ></TextInput>

                    <View style={styles.icon}>
                        <MaterialIcons
                            name={iconName}
                            size={20}
                            color={(() => {
                                switch (true) {
                                    case isFocued:
                                        return PRIMARY.DEFAULT;
                                    case !!value:
                                        return BLACK;
                                    default:
                                        return GRAY.DEFAULT;
                                }
                            })()}
                        />
                    </View>
                </View>
            </View>
        );
    }
);

Input.displayName = 'Input';

Input.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
    returnKeyType: PropTypes.oneOf(Object.values(ReturnkeyTypes)),
    secureTextEntry: PropTypes.bool,
    iconName: PropTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        color: GRAY.DEFAULT,
        marginBottom: 4,
    },
    focusedTitle: {
        color: PRIMARY.DEFAULT,
        borderColor: PRIMARY.DEFAULT,
        marginBottom: 4,
    },
    hasValueTitle: {
        color: BLACK,
        fontWeight: 600,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: GRAY.DEFAULT,
        paddingHorizontal: 20,
        height: 42,
        paddingLeft: 30,
    },
    hasValueInput: {
        borderColor: BLACK,
        color: BLACK,
    },
    icon: {
        position: 'absolute',
        left: 8,
        height: '100%',
        justifyContent: 'center',
    },
});

export default Input;

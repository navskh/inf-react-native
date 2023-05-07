import {
    Animated,
    Keyboard,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    useWindowDimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, PRIMARY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';

const BOTTOM = 30;
const BUTTON_WIDTH = 60;
const RIGHT = 10;

const InputFAB = ({ onInsert, isBottom }) => {
    const [text, setText] = useState('');
    const [isOpened, setIsOpened] = useState(false);
    const inputRef = useRef(null);
    const windowWidth = useWindowDimensions().width;
    const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);

    const inputWidth = useRef(new Animated.Value(BUTTON_WIDTH)).current;
    const buttonRotation = useRef(new Animated.Value(0)).current;
    const spin = buttonRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '315deg'],
    });

    const buttonRight = useRef(new Animated.Value(RIGHT)).current;
    useEffect(() => {
        Animated.timing(buttonRight, {
            toValue: isBottom ? RIGHT - BUTTON_WIDTH : RIGHT,
            useNativeDriver: false,
        }).start();
    }, [isBottom, buttonRight]);

    const open = () => {
        setIsOpened(true);
        Animated.timing(inputWidth, {
            toValue: windowWidth - 20,
            useNativeDriver: false,
            duration: 300,
        }).start(() => {
            inputRef.current.focus();
        });
        Animated.spring(buttonRotation, {
            toValue: 1,
            useNativeDriver: false,
            bounciness: 20,
        }).start();
    };

    const close = () => {
        setIsOpened(false);
        Animated.timing(inputWidth, {
            toValue: BUTTON_WIDTH,
            useNativeDriver: false,
            duration: 300,
        }).start(() => {
            inputRef.current.blur();
            setText('');
        });
        Animated.spring(buttonRotation, {
            toValue: 0,
            useNativeDriver: false,
            bounciness: 20,
        }).start();
    };

    useEffect(() => {
        const show = Keyboard.addListener('keyboardWillShow', (e) => {
            setKeyboardHeight(e.endCoordinates.height + BOTTOM);
        });
        const hide = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardHeight(BOTTOM);
        });

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    const onPressButton = () => (isOpened ? close() : open());
    const onPressInsert = () => {
        const task = text.trim();
        if (task) {
            onInsert(task);
        }
    };
    return (
        <>
            <Animated.View
                style={[
                    styles.container,
                    styles.shadow,
                    {
                        bottom: keyboardHeight,
                        alignItems: 'flex-start',
                        width: inputWidth,
                        right: buttonRight,
                    },
                ]}
            >
                <TextInput
                    ref={inputRef}
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="none"
                    keyboardAppearance="light"
                    returnKeyType="done"
                    onBlur={close}
                    onSubmitEditing={onPressInsert}
                />
            </Animated.View>
            <Animated.View
                style={[
                    styles.container,
                    {
                        bottom: keyboardHeight,
                        transform: [{ rotate: spin }],
                        right: buttonRight,
                    },
                ]}
            >
                <Pressable
                    style={({ pressed }) => [
                        styles.container,
                        { right: 0 },
                        pressed && { backgroundColor: PRIMARY.DARK },
                    ]}
                    onPress={onPressButton}
                >
                    <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
                </Pressable>
            </Animated.View>
        </>
    );
};

InputFAB.propTypes = {
    onInsert: PropTypes.func,
    isBottom: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        // right: RIGHT,
        width: BUTTON_WIDTH,
        height: BUTTON_WIDTH,
        borderRadius: BUTTON_WIDTH / 2,
        backgroundColor: PRIMARY.DEFAULT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: WHITE,
        paddingLeft: 20,
        paddingRight: BUTTON_WIDTH + 10,
    },
    shadow: {
        shadowColor: BLACK,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: { elevation: 5 },
        }),
    },
});
export default InputFAB;

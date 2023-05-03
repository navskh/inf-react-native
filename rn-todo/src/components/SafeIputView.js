import {
    View,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView,
    Pressable,
    Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';

const SafeInputView = ({ children }) => {
    return (
        <KeyboardAvoidingView style={styles.avoid}>
            <Pressable style={styles.avoid} onPress={Keyboard.dismiss}>
                {children}
            </Pressable>
        </KeyboardAvoidingView>
    );
};

SafeInputView.propTypes = {
    children: PropTypes.node,
};

const styles = StyleSheet.create({
    avoid: {
        flex: 1,
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

export default SafeInputView;

import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native';
import { Pressable } from 'react-native';
import { Keyboard } from 'react-native';

const SafeInputView = ({ children }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding' })}>
            <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
                {children}
            </Pressable>
        </KeyboardAvoidingView>
    );
};

SafeInputView.propTypes = {
    children: PropTypes.node,
};

export default SafeInputView;

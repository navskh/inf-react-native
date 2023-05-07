import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, PRIMARY, WHITE, DANGER } from '../colors';

export const ButtonTypes = {
    PRIMARY: 'PRIMARY',
    DANGER: 'DANGER',
};

const Button = ({ title, onPress, disabled, isLoading, buttonType }) => {
    const colors = { PRIMARY, DANGER };
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                { backgroundColor: colors[buttonType].DEFAULT },
                pressed && { backgroundColor: colors[buttonType].DARK },
                disabled && { backgroundColor: colors[buttonType].LIGHT },
            ]}
            disabled={disabled}
        >
            {isLoading ? (
                <ActivityIndicator size={'small'} color={GRAY.DEFAULT}></ActivityIndicator>
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
        </Pressable>
    );
};
Button.defaultProps = {
    buttonType: ButtonTypes.PRIMARY,
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY.DEFAULT,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        color: WHITE,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20,
    },
});

export default Button;

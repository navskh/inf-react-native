import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';

export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};

const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          return [
            styles.button,
            {
              backgroundColor: Colors[buttonType][0],
            },
            pressed && {
              backgroundColor: Colors[buttonType][1],
            },
            buttonStyle,
          ];
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.NUMBER,
};

Button.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  buttonStyle: propTypes.object,
  buttonType: propTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
  },
});

export default Button;

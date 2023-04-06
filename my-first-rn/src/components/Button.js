import { Text } from 'react-native';

const Button = (props) => {
  console.log(props);

  return <Text>{props.title}</Text>;
};

export default Button;

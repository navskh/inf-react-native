import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useReducer, useState } from 'react';
import Button from './components/Button';

const init = 0;
const CountType = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
};
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const ReducerTest = () => {
    const [result, setResult] = useState(0);
    const [resultVal, dispatch] = useReducer(reducer, init);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{resultVal}</Text>
            <Button title={'+'} onPress={() => dispatch(CountType.INCREMENT)} />
            <Button title={'-'} onPress={() => dispatch(CountType.DECREMENT)} />
        </View>
    );
};

ReducerTest.propTypes = {};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
});
export default ReducerTest;

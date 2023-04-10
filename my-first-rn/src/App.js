import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

export default function App() {
  const isError = true;

  const width = (useWindowDimensions().width - 5) / 4;
  const Operators = {
    CLEAR: 'C',
    MINUS: '-',
    PLUS: '+',
    EQUAL: '=',
  };
  const [result, setResult] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>0</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
              return (
                <Button
                  title={num.toString()}
                  onPress={() => {}}
                  buttonStyle={{ width, height: width, marginTop: 1 }}
                  key={num}
                ></Button>
              );
            })}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {}}
              buttonStyle={{ width: width * 2, height: width, marginBottom: 1 }}
            ></Button>
            <Button
              title="="
              onPress={() => {}}
              buttonStyle={{ width: width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            ></Button>
          </View>
        </View>
        <View style={styles.operator}>
          <Button
            title={Operators.CLEAR}
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          ></Button>
          <Button
            title={Operators.MINUS}
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          ></Button>
          <Button
            title={Operators.PLUS}
            onPress={() => {}}
            buttonStyle={{ width, height: width * 2, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    justifyContent: 'space-evenly',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    padding: 30,
  },
  leftPad: {
    width: '75%',
  },
  number: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  operator: {},
});

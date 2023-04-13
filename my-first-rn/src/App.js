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
  const [formular, setFormular] = useState([]);

  const calculate = () => {
    let calculateNumber = 0;
    let operator = '';

    formular.forEach((value) => {
      if ([Operators.PLUS, Operators.MINUS].includes(value)) {
        operator = value;
      } else {
        if (operator === Operators.PLUS) {
          calculateNumber += value;
        } else if (operator === Operators.MINUS) {
          calculateNumber -= value;
        } else {
          calculateNumber = value;
        }
      }
    });

    setResult(calculateNumber);
    setFormular([]);
  };

  const onPressNumber = (num) => {
    console.log(formular);
    const last = formular[formular.length - 1];

    if (isNaN(last)) {
      setResult(num);
      setFormular((prev) => [...prev, num]);
    } else {
      const newNum = (last ?? 0) * 10 + num;
      setResult(newNum);
      setFormular((prev) => {
        prev.pop();
        return [...prev, newNum];
      });
    }
  };

  const onPressOperator = (operator) => {
    console.log(formular);
    switch (operator) {
      case Operators.CLEAR:
        setResult(0);
        setFormular([]);
        break;
      case Operators.EQUAL:
        //TODO
        calculate();
        break;
      default:
        // +, -
        const last = formular[formular.length - 1];
        if ([Operators.PLUS, Operators.MINUS].includes(last)) {
          setFormular((prev) => {
            prev.pop();
            return [...prev, operator];
          });
        } else {
          setFormular((prev) => [...prev, operator]);
        }
        // TODO
        break;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>
          {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
              return (
                <Button
                  title={num.toString()}
                  onPress={() => {
                    onPressNumber(num);
                  }}
                  buttonStyle={{ width, height: width, marginTop: 1 }}
                  key={num}
                ></Button>
              );
            })}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {
                onPressNumber(0);
              }}
              buttonStyle={{ width: width * 2, height: width, marginBottom: 1 }}
            ></Button>
            <Button
              title={Operators.EQUAL}
              onPress={() => {
                onPressOperator(Operators.EQUAL);
              }}
              buttonStyle={{ width: width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            ></Button>
          </View>
        </View>
        <View style={styles.operator}>
          <Button
            title={Operators.CLEAR}
            onPress={() => {
              onPressOperator(Operators.CLEAR);
            }}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          ></Button>
          <Button
            title={Operators.MINUS}
            onPress={() => {
              onPressOperator(Operators.MINUS);
            }}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          ></Button>
          <Button
            title={Operators.PLUS}
            onPress={() => {
              onPressOperator(Operators.PLUS);
            }}
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

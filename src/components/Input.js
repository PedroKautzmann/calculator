import React from 'react';

import {View, StyleSheet} from 'react-native';

import Number from './Number';

const Input = props => (
  <View style={styles.view}>
    <Number num={props.num1} setResult={props.setResult} name="num1" />
    <Number num={props.num2} setResult={props.setResult} name="num2" />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
  },
  textInput: {
    fontSize: 30,
    height: 100,
  },
});

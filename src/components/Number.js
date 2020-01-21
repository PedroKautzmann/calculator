import React from 'react';

import {TextInput, StyleSheet} from 'react-native';

const Number = props => (
  <TextInput
    style={styles.textInput}
    keyboardType="numeric"
    value={props.num}
    onChangeText={value => {
      props.setResult(props.name, value);
    }}
  />
);
export default Number;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    height: 80,
    width: 140,
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
  },
});

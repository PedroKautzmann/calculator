import React from 'react';

import {View, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native';

const Display = props => (
  <View style={styles.center}>
    <KeyboardAvoidingView>
      <TextInput
        style={styles.textInput}
        placeholder="Resultado"
        value={props.result}
      />
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 30,
    height: 100,
    color: '#CCC',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Display;

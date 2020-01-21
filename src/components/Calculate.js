import React, {Component} from 'react';

import {Picker, StyleSheet} from 'react-native';

export default class Calculate extends Component {
  render() {
    return (
      <Picker
        style={styles.picker}
        selectedValue={this.props.operation}
        onValueChange={operation => {
          this.props.updateOperation(operation);
        }}>
        <Picker.Item label="Soma" value="soma" />
        <Picker.Item label="Subtração" value="subtracao" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    margin: 15,
  },
});

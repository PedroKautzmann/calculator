import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Nav = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Calculadora 1.0</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});

export default Nav;

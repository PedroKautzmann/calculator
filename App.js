import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Header, Result, Panel} from './src/components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {num1: '', num2: '', operation: 'soma', result: ''};

    this.calculate = this.calculate.bind(this);
    this.setResult = this.setResult.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
  }

  calculate() {
    let result = 0;

    switch (this.state.operation) {
      case 'soma':
        result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case 'subtracao':
        result = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      default:
        result = 0;
    }

    this.setState({result: result.toString()});
  }

  updateOperation(operation) {
    this.setState({operation});
  }

  setResult(name, value) {
    const obj = {};

    obj[name] = value;

    this.setState(obj);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header />
          <Result result={this.state.result} />
          <Panel
            num1={this.state.num1}
            num2={this.state.num2}
            operation={this.state.operation}
            calculate={this.calculate}
            updateOperation={this.updateOperation}
            setResult={this.setResult}
          />
        </SafeAreaView>
      </>
    );
  }
}

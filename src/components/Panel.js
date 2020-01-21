import React from 'react';

import {View} from 'react-native';

import Input from './Input';
import Calculate from './Calculate';
import Command from './Command';

const Panel = props => (
  <View>
    <Input num1={props.num1} num2={props.num2} setResult={props.setResult} />
    <Calculate
      operation={props.operation}
      updateOperation={props.updateOperation}
    />
    <Command action={props.calculate} />
  </View>
);

export {Panel};

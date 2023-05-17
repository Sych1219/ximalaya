import {Text} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

export default function Te(): JSX.Element {
  return <Text>{Config.API_URL}</Text>;
}

import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const ToggleWarning = (props: {toggle: boolean; warning: string}) =>
  props.toggle ? (
    <Text style={styles.warningField}>{props.warning}</Text>
  ) : null;
export default ToggleWarning;

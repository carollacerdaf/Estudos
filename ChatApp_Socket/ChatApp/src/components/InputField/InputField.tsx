import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

interface inputProps {
  placeholder: string;
  onChangeText: any;
  style?: any;
}

const InputField = (props: inputProps) => {
  return (
    <TextInput
      style={styles.sectionUserSend}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  );
};

export default InputField;

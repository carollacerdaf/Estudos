import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonProps {
    submit: ((event: GestureResponderEvent) => void)
}

const SendButton = (props: ButtonProps) => (
    <TouchableOpacity
          style={styles.button}
          onPress={props.submit}>
          <Text style={styles.buttonTxt}> Send </Text>
        </TouchableOpacity>
);

export default SendButton;
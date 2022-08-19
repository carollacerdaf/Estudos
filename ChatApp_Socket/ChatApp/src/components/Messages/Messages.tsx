import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface MessagesProps {
  author: any;
  message: any;
}

const Messages = (props: MessagesProps) => (
  <View style={styles.sectionDescription}>
    <Text style={styles.author}>{props.author}: </Text>
    <Text style={styles.message}>{props.message}</Text>
  </View>
);

export default Messages;

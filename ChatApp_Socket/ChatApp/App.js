/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useForm} from 'react-hook-form';

const socket = io.connect('http://192.168.1.2:3000/');

function App() {
  const {register, setValue, handleSubmit} = useForm();
  const [message, setMessage] = useState([]);

  useEffect(() => {
    register('author');
    register('message');
  }, [register]);

  socket.on('hello', function (arg) {
    renderMessage(arg);
  });

  socket.on('receivedMessage', function (data) {
    console.log('# ', data);
    renderMessage(data);
  });

  const onSubmit = data => {
    socket.emit('sendMessage', data);
    renderMessage(data);
    this.setMessage({message: ''});
  };

  const renderMessage = data => {
    let new_msg = [...message];
    new_msg.push(data);
    setMessage(new_msg);
  };

  return (
    <View style={styles.sectionContainer}>
      <TextInput
        style={styles.sectionUserSend}
        placeholder="author"
        onChangeText={text => setValue('author', text)}
      />
      <View style={styles.messageContainer}>
        {message.map((item, index) => (
          <View style={styles.sectionDescription}>
            <Text style={styles.author} key={index}>
              {item.author} :
            </Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        ))}
      </View>
      <View style={styles.sectionSend}>
        <TextInput
          clearButtonMode="always"
          style={(styles.sectionMessageSend, styles.sectionUserSend)}
          placeholder="Message"
          onChangeText={text => setValue('message', text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text> Enviar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 80,
    paddingHorizontal: 24,
  },
  messageContainer: {
    opacity: 0.5,
    marginTop: 6,
    marginBottom: 6,
  },
  sectionUserSend: {
    fontSize: 14,
    fontWeight: '400',
    height: 40,
    borderWidth: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderColor: 'lightgrey',
  },
  sectionMessageSend: {
    width: '100%',
    marginTop: 4,
  },
  sectionDescription: {
    flexDirection: 'row',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    maxWidth: '100%',
  },
  sectionSend: {
    bottom: -400,
    maxWidth: '100%',
    position: 'static',
  },
  highlight: {
    fontWeight: '700',
  },
  author: {
    fontWeight: 'bold',
  },
  message: {
    maxWidth: '80%',
  },
  button: {
    alignItems: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
});

export default App;

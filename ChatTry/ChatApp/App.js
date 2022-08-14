/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {StyleSheet, TextInput, View, Button, Text} from 'react-native';
import {useForm} from 'react-hook-form';

function App() {
  const {register, setValue, handleSubmit} = useForm();
  const [message, setMessage] = useState([]);
  useEffect(() => {
    register('author');
    register('message');
  }, [register]);

  var socket = io.connect('http://localhost:3000/');

  const onSubmit = data => {
    renderMessage(data);
    socket.emit('sendMessage', data);
  };

  socket.on('receivedMessage', function (data) {
    renderMessage(data);
  });

  const renderMessage = data => {
    let new_msg = [...message];
    new_msg.push(data);
    setMessage(new_msg);
  };

  return (
    <View style={styles.sectionContainer}>
      <TextInput
        style={styles.sectionAuthor}
        placeholder="author"
        onChangeText={text => setValue('author', text)}
      />
      <View style={styles.sectionDescription}>
        {message.map(item => (
          <Text>
            {item.author} : {item.message}
          </Text>
        ))}
      </View>
      <TextInput
        style={styles.sectionMessage}
        placeholder="Message"
        onChangeText={text => setValue('message', text)}
      />
      <Button onPress={handleSubmit(onSubmit)} title="Enviar" />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 80,
    paddingHorizontal: 24,
  },
  sectionAuthor: {
    fontSize: 14,
    fontWeight: '400',
    height: 30,
    borderWidth: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderColor: 'lightgrey',
  },
  sectionMessage: {
    fontSize: 14,
    fontWeight: '400',
    height: 30,
    borderWidth: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderColor: 'lightgrey',
    marginTop: 4,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    height: 300,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

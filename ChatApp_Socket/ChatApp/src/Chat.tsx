import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import SendButton from './components/SendButton/SendButton';
import Messages from './components/Messages/Messages';
import {IMessage} from './Interfaces/Message';
import InputField from './components/InputField/InputField';
import ToggleWarning from './components/ToggleWarning/ToggleWarning';

const socket = io('http://localhost:3000/');

function Chat() {
  const {register, setValue, handleSubmit} = useForm();
  const [message, setMessage] = useState<IMessage[]>([]);
  const [toggleWarning, setToggleWarning] = useState<boolean>(false);

  useEffect(() => {
    register('author');
    register('message');
  }, [register]);

  socket.on('hello', function (arg: IMessage) {
    renderMessage(arg);
  });

  socket.on('receivedMessage', function (data: IMessage) {
    renderMessage(data);
  });

  socket.on('previousMessages', function (messages) {
    messages.map((msg: IMessage) => {
      renderMessage(msg);
    });
  });

  const onSubmit = (data: any) => {
    if (
      data.author === undefined ||
      data.author === '' ||
      data.message === undefined ||
      data.message === ''
    ) {
      setToggleWarning(true);
    } else {
      setToggleWarning(false);
      socket.emit('sendMessage', data);
      renderMessage(data);
    }
  };
  const renderMessage = (data: IMessage) => {
    let new_msg = [...message];
    new_msg.push(data);
    setMessage(new_msg);
  };
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>ChatApp</Text>
      <InputField
        onChangeText={(text: string) => setValue('author', text)}
        placeholder="Author"
      />
      <ScrollView style={styles.messageContainer}>
        {message.map((item, index) => (
          <Messages key={index} author={item.author} message={item.message} />
        ))}
      </ScrollView>
      <View style={styles.sectionSend}>
        <InputField
          onChangeText={(text: string) => setValue('message', text)}
          placeholder="Message"
        />
        <ToggleWarning toggle={toggleWarning} warning="Fields are required." />
        <SendButton submit={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
  },
  messageContainer: {
    opacity: 0.5,
    marginTop: 6,
    marginBottom: 6,
    height: 530,
  },
  sectionSend: {
    maxWidth: '100%',
    marginTop: 4,
  },
  highlight: {
    fontWeight: '700',
  },
});
export default Chat;

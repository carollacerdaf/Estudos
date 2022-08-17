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
   Text,
   ScrollView,
 } from 'react-native';
 import {useForm} from 'react-hook-form';
 import SendButton from './components/SendButton/SendButton';
 import Messages from './components/Messages/Messages';
 import { IMessage } from './Interfaces/Message';
 //const socket = io.connect('http://192.168.1.2:3000/');
 const socket = io('http://192.168.1.2:3000/', { transports: ["websocket"] });

 function Chat() {
   const {register, setValue, handleSubmit} = useForm();
   const [message, setMessage] = useState<IMessage[]>([]);
   useEffect(() => {
     register('author');
     register('message');
   }, [register]);
   socket.on('hello', function (arg: IMessage) {
     renderMessage(arg);
   });
   socket.on('receivedMessage', function (data: IMessage) {
     console.log('# ', data);
     renderMessage(data);
   });
   const onSubmit = (data: any) => {
     socket.emit('sendMessage', data);
     renderMessage(data);
   };
   const renderMessage = (data: IMessage) => {
     let new_msg = [...message];
     new_msg.push(data);
     setMessage(new_msg);
   };
   return (
     <View style={styles.sectionContainer}>
       <Text style={styles.title}>ChatApp</Text>
       <TextInput
         style={styles.sectionUserSend}
         placeholder="Author"
         onChangeText={text => setValue('author', text)}
       />
       <ScrollView style={styles.messageContainer}>
         {message.map((item, index) => (
           <Messages key={index} author={item.author} message={item.message}/>
         ))}
       </ScrollView>
       <View style={styles.sectionSend}>
         <TextInput
           clearButtonMode="always"
           style={(styles.sectionMessageSend, styles.sectionUserSend)}
           placeholder="Message"
           onChangeText={text => setValue('message', text)}
         />
         <SendButton submit={handleSubmit(onSubmit)}/>
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
   sectionSend: {
     maxWidth: '100%',
     marginTop: 4,
   },
   highlight: {
     fontWeight: '700',
   },
 });
 export default Chat;
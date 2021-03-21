import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import { StyleSheet, Text, View, TextInput, NativeModules, TouchableOpacity } from 'react-native';

const SharedStorage = NativeModules.SharedStorage;
// Need to test with ngrok with mobile phone
const socketURL = 'http://d1d6093f3136.ngrok.io'
const socket = io(socketURL)

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [chatMessage, setChatMessage] = React.useState('testttt')
  const [chatMessages, onChangeChatMessages] = React.useState([])


  // Same as componentDidMount()
  useEffect(() => {
    console.log('joining room')
    socket.on("chat message", msg => {
      console.log('use effect socket on testt', msg)
      console.log('the messages before', chatMessages)
      updateChatMessages(msg)
      console.log('the messages after', chatMessages)
    })

    // Clean up effect
    return () => socket.disconnect();
  }, []);

  const updateChatMessages = (msg) => {
    onChangeChatMessages(chatMessages => ([...chatMessages, msg]))
    console.log('the chat message', chatMessage)
  }

  const chatMessagesElement = chatMessages.map(chatMessage => (
      <Text key={chatMessage} style={{borderWidth: 2, height: 20, top: 5}}>{chatMessage}</Text>
  ));

  const submitChatMessage = () => {
    socket.emit('chat message', chatMessage)
    console.log('emitted socket thing')
    setChatMessage('')
    console.log('messages', chatMessages)
  }

  return (
    <View style={styles.container}>


      <View>
        {chatMessagesElement}
        <TextInput
          style={{width: 200, height: 40, borderWidth: 2}}
          autoCorrect={false}
          value={chatMessage}
          placeholder='send a msg plz'
          onSubmitEditing={submitChatMessage}
          onChangeText={msg => {
            setChatMessage(msg);
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    width: 300,
    padding: 10,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
  },
});

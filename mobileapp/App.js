import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, NativeModules, TouchableOpacity } from 'react-native';

const SharedStorage = NativeModules.SharedStorage;

export default function App() {
  const [text, onChangeText] = React.useState("");
  const sendText = () => {
    console.log('SENDING TEXT')
    console.log('text', {text})
    SharedStorage.set(
     JSON.stringify({text})
    );
  }
  return (
    <View style={styles.container}>
      <Text style={{padding: 40, fontSize: 20}}>React Native Widget Trial</Text>
      <View style={styles.inputContainer}>
        <Text style={{padding: 20}}>Widget Text:</Text>
        <TextInput
          style={{
          height: 40,
          width: 150,
          borderColor: 'gray',
          borderWidth: 1
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder="text to show on widget"
          ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={sendText}
        >
        <Text>Send</Text>
      </TouchableOpacity>
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

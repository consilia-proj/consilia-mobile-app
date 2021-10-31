import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EventType(props) {
  return (
    <TouchableOpacity 
      style={[styles.option, {backgroundColor: props.color, borderWidth: props.selected ? 2: 1}]}
      onPress={props.onPress}
    >
      <Text style={[styles.txt]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    width: "90%",
    height: 70,
    marginBottom: 15,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 22,
  }
})
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EventType(props) {
  return (
    <TouchableOpacity 
      style={[styles.option, {backgroundColor: props.color}]}
      onPress={props.onPress}
    >
      <Text style={styles.txt}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    width: '70%',
    height: '15%',
    marginVertical: '6%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 22
  }
})
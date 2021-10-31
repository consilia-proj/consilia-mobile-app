import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import EventType from '../components/EventType';

export default function NewGroup(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Event</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.inputLabel}>Group Name</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.inputLabel}>Date</Text>
      <TouchableOpacity style={styles.next} onPress={props.onNext}>
        <Text style={{fontSize: 18}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goHome} onPress={props.goHome}>
        <Text>Return Home</Text>
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    marginTop: 15,
    marginBottom: 48,
  },
  input: {
    width: "60%",
    marginRight: 10,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 2,
  }, 
  inputLabel: {
    marginTop: 3,
    marginBottom: 60,
    color: "#222",
    fontSize: 16
  },
  next: {
    width: "55%",
    height: 60,
    backgroundColor: "rgba(0, 50, 255, .4)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 30
  },
  goHome: {

  }
})
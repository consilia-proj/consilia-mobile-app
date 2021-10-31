import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import TransportMode from '../components/TransportMode';

export default function Transport(props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Transportation Modes</Text>
      <ScrollView style={styles.options} contentContainerStyle={styles.optionsCont}>
        {["Car", "Bus", "Uber"].map((vehicle, i) => (
          <TransportMode text={vehicle} key={i}></TransportMode>
        ))}
      </ScrollView> 
      <TouchableOpacity style={styles.next} onPress={props.onSubmit}>
        <Text style={{fontSize: 18}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.goHome}>
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
    flex: 1
  },
  options: {
    width: "90%",
    flexGrow: 0,    
  },
  optionsCont: {

  },
  goHome: {

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
  }
  
})
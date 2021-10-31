import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NextButton(props) {
  return (
    <TouchableOpacity style={styles.next} onPress={props.onPress} disabled={props.disabled}>
      <Text style={{fontSize: 18}}>Next</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  next: {
    width: "55%",
    height: 60,
    backgroundColor: "rgba(0, 50, 255, .4)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
  }
})
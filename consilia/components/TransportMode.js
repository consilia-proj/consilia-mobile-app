import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox"; 

export default function TransportMode(props) {
  return (
    <View style={styles.option}>
      <BouncyCheckbox iconStyle={{borderRadius: 0}}></BouncyCheckbox>
      <Text style={styles.txt}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    width: '90%',
    height: '15%',
    marginVertical: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap"
  },
  txt: {
    fontSize: 22
  }
})
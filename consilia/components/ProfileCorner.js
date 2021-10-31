import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileCorner(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.option}>
      <Image style={styles.pfp} source={props.src ? props.src : require('../assets/images/placeholder.jpg')}></Image>
      <Text style={styles.nameTxt}>{props.first} {props.last}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    width: 100,
    height: 60,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  nameTxt: {
    fontSize: 10,
    color: "gray"
  },
  pfp: {
    height: 50,
    width: 50,
    borderRadius: 25,
  }
})
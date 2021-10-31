import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './card';
import { brandColor } from '../constants/colors';
export default function EventType(props) {
  return (
   <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={styles.link}>
   <Card color={props.color} style={{ height: "60%", }}>
       <Text style={[styles.subcontent, { textAlign: 'center' }]}>{props.text}</Text>
   </Card>
   </TouchableOpacity>
)
}

const styles = StyleSheet.create({
link: {
height: 90,
paddingHorizontal: 15,
width: "100%",
},

subcontent: {
fontSize: 20,
fontWeight: 'bold',
color: 'black'
},
})
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './card';
import { brandColor, brandSubColor } from '../constants/colors';
export default function EventType(props) {
  return (
   <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={styles.link}>
   <Card style={{ height: "60%", borderWidth: props.selected ? 2 : 1, borderColor: props.selected ? brandSubColor : "black"}}>
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
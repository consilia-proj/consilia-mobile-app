import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image } from 'react-native';
import EventType from '../components/EventType';
import TransportMode from '../components/TransportMode';

export default function PlaceVotes(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.linkStyle}>{props.link}</TextInput>
      <Text style={styles.titleText}>{props.title}</Text>
      <Image style={styles.img} source={
        {uri: "https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTczNjY4MTk3OTU2ODU1NzE3/austin-city-limits.jpg"}
      }></Image>
      <Text>{props.distance} away</Text>
      <Text>{props.rating} stars</Text>

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
  img: {
    width: "95%",
    height: 500
  },
  linkStyle: {
    backgroundColor: "white",
    width: "70%",
    textAlign: "center",
    height: 35,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10
  },
  titleText: {
    fontSize: 30,
    marginBottom: 10,
  }
})
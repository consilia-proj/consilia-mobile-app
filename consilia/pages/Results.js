import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image} from 'react-native';
import EventType from '../components/EventType';
import TransportMode from '../components/TransportMode';
import { RFValue } from 'react-native-responsive-fontsize';

import { useState, useEffect, useContext } from 'react';
import { GroupInfoContext } from '../contexts/GroupInfo';

import Card from '../components/card';
export default function Results(props) {
  const groupInfo = useContext(GroupInfoContext);
  const [placez, setPlaces] = useState([]);


function load() 
{
  fetch(`http://35.239.35.148/Event/${groupInfo.eventID}/votes`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setPlaces(data);
  })
}

  useEffect(() => {
   load()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: 'center', marginTop: RFValue(50) }]}>Current Results</Text>
      <TextInput style={{backgroundColor: "white", borderWidth: 1, marginVertical: 2}} value={groupInfo.eventID}/>

    <ScrollView style={{width: "100%"}} fadingEdgeLength={100}>
      {placez.map((item, index) => {return(
        <Card key={index} color="#eee" style={{width: "92%"}}>
          <Text style={{color: "black", fontWeight: "bold"}}>{item.name}</Text>
          <Text style={{color: "black"}}>Votes: {item.points}</Text>
          {item.rating != -1 && <Text style={{color: "black"}}>Rating: {item.rating}/5</Text>}
        </Card>
      )})}
      </ScrollView>
      <TouchableOpacity style={{margin: 5}} onPress={(e) => {load();}}>
        <Text>Reload</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.goHome} onPress={props.goHome}>
        <Text>Go Home</Text>
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
  title: {
    fontSize: RFValue(25),
    fontWeight: "bold",
    color: "#000000"
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
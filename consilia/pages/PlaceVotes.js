import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image } from 'react-native';
import { GroupInfoContext } from '../contexts/GroupInfo';


function greatCircleDist(a, b) { // distance (in mi) on Earth's surface as the crow flies.
  // r*arccos(sin φ1 sin φ2 cos(θ1-θ2) + cos φ1 cos φ2).
  return 3959*Math.acos(Math.sin((90 - a[0])*Math.PI/180)*Math.sin((90 - b[0])*Math.PI/180) * Math.cos((a[1] - b[1])*Math.PI/180) + Math.cos((90 - a[0])*Math.PI/180)*Math.cos((90 - b[0])*Math.PI/180))
}

export default function PlaceVotes(props) {
  const groupInfo = useContext(GroupInfoContext)
  const [places, setPlaces] = useState(null);


  useEffect(() => {
    fetch(`http://35.239.35.148/Event/${groupInfo.eventID}/votes`)
      .then(response => response.json())
      .then(data => {
        setPlaces(data);
      })
  }, [])

  return (
    <View style={styles.container}>
      <TextInput style={styles.linkStyle} value={groupInfo && groupInfo.eventID ? groupInfo.eventID : ""}>{props.link}</TextInput>
      <Text style={styles.titleText}>{props.title}</Text>
      {places && places.map((place, i) => (
        <View key={i}>
          <Image style={styles.img} source={
            {uri: place.imageURL}
          }></Image>
          <Text>{greatCircleDist([groupInfo.locationLat, groupInfo.locationLong], [place.latitude, place.longitude])} away</Text>
          <Text>{place.rating} stars</Text>
        </View>
      ))}
      

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
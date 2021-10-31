import React from 'react';
import { Animated, PanResponder, View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image, Dimensions } from 'react-native';
import EventType from '../components/EventType';
import TransportMode from '../components/TransportMode';
import PlaceData from '../components/PlaceData';
import { tsConstructorType } from '@babel/types';
import { PanResponderclass } from 'PanResponderClass';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;
const data = [
    {
        "PlaceID" : "1",
        "EventID" : "ajdfln1-2341",
        "Rating" : 3.8,
        "Name" : "ACL",
        "Description" : "Music festival to get high at",
        "Longitude" : -92.001,
        "Latitude" : 30.43,
        "ImageURL" : "https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTczNjY4MTk3OTU2ODU1NzE3/austin-city-limits.jpg",
        "GooglePlaceID" : "lksdjfano32",
    },
    {
        "PlaceID" : "2",
        "EventID" : "sdfnmkglfer",
        "Rating" : 4.0,
        "Name" : "Fuddruckers",
        "Description" : "Burger place that fudds",
        "Longitude" : -92.3201,
        "Latitude" : 30.42,
        "ImageURL" : "https://3e87eb59177583ca20e5-3c4f8e07d4ab2f5f48a61d1d9b0d1b8c.ssl.cf2.rackcdn.com/20161012095655-f59db4bc.jpg",
        "GooglePlaceID" : "lksdjfano32",
    }
]


export default function PlaceVotes(props) {
    
    var renderPlaces = () =>{
        return data.map((item,i) =>{
            return(
                <Animated.View 
                key={item.PlaceID} style={styles.animated}>
                    <Text style={styles.titleText}>{item.Name}</Text>
                    <Text style={styles.desc}>{item.Description}</Text>
                    <Image style={styles.img} 
                    source={{uri: item.ImageURL}}></Image>
                    <Text>{item.Rating} stars</Text>
                </Animated.View>
            )
        })
    }
  
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.goHome}>
        <Text>Return Home</Text>
      </TouchableOpacity> 
      {renderPlaces()}
    </View>
  )
}

const styles = StyleSheet.create({
  animated:{
    height:SCREEN_HEIGHT-120,
    width:SCREENWIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#fff'
  },
  card:{
      flex: 0.45,
      borderRadius: 8,
      shadowRadius:25,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: {width:0, height:0},
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'fff'

  },
  cardImage: {
      width: 160,
      flex: 1,
      resizeMode: 'contain'
  },
  img: {
      flex:1,
      width: "95%",
      height: 500,
      borderRadius:20
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
  },
  desc: {
      fontSize: 16
  }
})
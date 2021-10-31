import React, {useState} from 'react';
import styled from 'styled-components'
import { Animated, PanResponder, View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image, Dimensions } from 'react-native';
import EventType from '../components/EventType';
import TransportMode from '../components/TransportMode';
import PlaceData from '../components/PlaceData';
import { tsConstructorType } from '@babel/types';
import TinderCard from 'react-tinder-card'

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

const alreadyRemoved = []

function PlaceVotes(props) {
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (Name) => {
        console.log(Name + ' left the screen!')
    }

    // var renderPlaces = () =>{
    //     return data.map((item,i) =>{
    //         return(
                
      
                // <Animated.View 
                // key={item.PlaceID} style={styles.animated}>
                //     <Text style={styles.titleText}>{item.Name}</Text>
                //     <Text style={styles.desc}>{item.Description}</Text>
                //     <Image style={styles.img} 
                //     source={{uri: item.ImageURL}}></Image>
                //     <Text>{item.Rating} stars</Text>
                // </Animated.View>
    //         )
    //     })
    // }
  
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.goHome}>
        <Text>Return Home</Text>
      </TouchableOpacity> 
      
      <CardContainer>
        {data.map((item, i) =>
          <TinderCard key={item.Name} onSwipe={(dir) => swiped(dir, item.Name)} onCardLeftScreen={() => outOfFrame(item.Name)}>
            <Card>
                <Text style={styles.titleText}>{item.Name}</Text>
                <Text style={styles.desc}>{item.Description}</Text>
                <Image style={styles.img} 
                source={{uri: item.ImageURL}}></Image>
                <Text style={styles.rating}>{item.Rating} stars</Text>
            </Card>
          </TinderCard>
        ).reverse()}
      </CardContainer>
      
      {lastDirection ? <InfoText>You swiped {lastDirection}</InfoText> : <InfoText />}
    
    </View>
  )
}


export default PlaceVotes;

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
      width: 200,
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
  rating: {
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 30,
    marginBottom: 10,
  },
  desc: {
      fontSize: 16
  },

})



const CardContainer = styled.View`
    width: 95%;
    max-width: 400px;
    text-align: center;
    height: 100%;
    padding: 20px;
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 260px;
    height: 600;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
    justify-content: center;
`


const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
`
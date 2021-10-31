import React, {useState, useMemo} from 'react';
import styled from 'styled-components'
import {Button, View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image, Dimensions } from 'react-native';
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
let placesState = data



function PlaceVotes(props) {
    const [places, setPlaces] = useState(data)
    const [lastDirection, setLastDirection] = useState()

    const childRefs = useMemo(() => Array(data.length).fill(0).map(i => React.createRef()), [])

    const swiped = (direction, nameToDelete, i) => {
        console.log('removing: ' + nameToDelete + ' to the ' + direction)
        setLastDirection(direction)
        alreadyRemoved.push(nameToDelete)
        if(i == data.length - 1) {
          props.finalScreen();
        }
    }

    

    const outOfFrame = (PlaceID) => {
        console.log(PlaceID + ' left the screen!')
        placesState = placesState.filter(place => place.PlaceID !== PlaceID)
        setPlaces(placesState)
    }

    const swipe = (dir) => {
        const cardsLeft = places.filter(place => !alreadyRemoved.includes(place.PlaceID))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].PlaceID // Find the card object to be removed
            const index = data.map(Place => Place.PlaceID).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }
  
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.goHome}>
        <Text>Return Home</Text>
      </TouchableOpacity> 
      
      <CardContainer>
        {data.map((item, index) =>
          <TinderCard ref={childRefs[index]} key={item.PlaceID} onSwipe={(dir) => swiped(dir, item.PlaceID, index)} onCardLeftScreen={() => outOfFrame(item.PlaceID)}>
            <Card>
                <Text style={styles.titleText}>{item.Name}</Text>
                <Text style={styles.desc}>{item.Description}</Text>
                <Text style={styles.rating}>{item.Rating} stars</Text>
                <Image style={styles.img} 
                source={{uri: item.ImageURL}}></Image>
                <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                    <Text style={{justifyContent: 'flex-start', fontSize: 12}}>Dislike</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{justifyContent: 'flex-end', textAlign: 'right', fontSize:12}}>Like</Text>
                </View>
        </View>
            </Card>
          </TinderCard>
        ).reverse()}
        
      </CardContainer>
        
      {/* {lastDirection ? <InfoText>You swiped {lastDirection}</InfoText> : <InfoText />} */}
    
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
      fontSize:12,
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 30,
    marginBottom: 5,
  },
  desc: {
      fontSize: 12
      
  },

})



const CardContainer = styled.View`
    width: 95%;
    max-width: 400px;
    text-align: center;
    height: 80%;
    padding: 20px;
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 260px;
    height: 600px;
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
    bottom:0;
    display: flex;
`
const Buttons = styled.View`
    margin: 20px;
    z-index: -100;
`
import React, {useState, useMemo, useEffect, useContext} from 'react';
import styled from 'styled-components'
import {Button, View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image, Dimensions } from 'react-native';
import EventType from '../components/EventType';
import TransportMode from '../components/TransportMode';
import PlaceData from '../components/PlaceData';
import { tsConstructorType } from '@babel/types';
import TinderCard from 'react-tinder-card'
import { GroupInfoContext } from '../contexts/GroupInfo';
import { UserInfoContext } from '../contexts/UserInfo';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;
const data = [
    {
        "placeID" : "1",
        "eventID" : "ajdfln1-2341",
        "rating" : 3.8,
        "name" : "ACL",
        "description" : "Music festival to get high at",
        "longitiude" : -92.001,
        "latitude" : 30.43,
        "imageURL" : "https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTczNjY4MTk3OTU2ODU1NzE3/austin-city-limits.jpg",
        "googlePlaceId" : "lksdjfano32",
    },
    {
        "placeID" : "2",
        "eventID" : "sdfnmkglfer",
        "rating" : 4.0,
        "name" : "Fuddruckers",
        "description" : "Burger place that fudds",
        "longitiude" : -92.3201,
        "latitude" : 30.42,
        "imageURL" : "https://3e87eb59177583ca20e5-3c4f8e07d4ab2f5f48a61d1d9b0d1b8c.ssl.cf2.rackcdn.com/20161012095655-f59db4bc.jpg",
        "googlePlaceId" : "lksdjfano32",
    }
]

const alreadyRemoved = []
let placesState = data



function PlaceVotes(props) {
    const [places, setPlaces] = useState(data)
    const [lastDirection, setLastDirection] = useState()
    const groupInfo = useContext(GroupInfoContext)
    const userInfo = useContext(UserInfoContext)

    const childRefs = useMemo(() => Array(data.length).fill(0).map(i => React.createRef()), [])

    useEffect(() => {
      fetch(`http://35.239.35.148/Event/${groupInfo.eventID}/votes`)
        .then(response => response.json())
        .then(newData => {
          console.log("newData.length:" + newData.length)
          setPlaces(newData);
        }).then(console.log("places.length:" + places.length))
    }, [])

    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete + ' to the ' + direction)
      setLastDirection(direction)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          voteType: direction == "right" ? 1 : 0
        })
      };
      fetch(`http://35.239.35.148/Event/${groupInfo.eventID}/${nameToDelete}/vote/${userInfo.UUID}/aaaaaa`, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data)});
      alreadyRemoved.push(nameToDelete)
    }

    

    const outOfFrame = (placeID) => {
        console.log(placeID + ' left the screen!')
        newPlaces = places.filter(place => place.placeID != placeID && !alreadyRemoved.includes(place.placeID))
        setPlaces(newPlaces)
        if (newPlaces.length === 0) {
          props.goToResults()
        }
    }

    /*const swipe = (dir) => {
        const cardsLeft = places.filter(place => !alreadyRemoved.includes(place.placeID))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].placeID // Find the card object to be removed
            const index = data.map(Place => Place.placeID).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }*/
  
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.goHome}>
        <Text>Return Home</Text>
      </TouchableOpacity> 
      
      <CardContainer>
        {places.map((item, index) =>
          <TinderCard ref={childRefs[index]} key={item.placeID} onSwipe={(dir) => swiped(dir, item.placeID)} onCardLeftScreen={() => outOfFrame(item.placeID)}>
            <Card>
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <Text style={styles.rating}>{item.rating} stars</Text>
                <Image style={styles.img} 
                source={{uri: item.imageURL}}></Image>
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
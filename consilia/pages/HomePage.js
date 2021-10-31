import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Touchable, ImageBackground } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ProfileCorner from '../components/ProfileCorner';

import Card from '../components/card'
import { brandColor, brandSubColor } from '../constants/colors'
import mapImg from '../constants/mapfad.png';

import { UserInfoContext } from '../contexts/UserInfo';
export default function HomePage(props) {
  const userInfo = useContext(UserInfoContext)

  const [showInput, setShowInput] = useState(false)
  const [IDInput, setIDInput] = useState("")
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {width: "80%"}]}  onPress={props.touchTitle}>Welcome, {userInfo.first}</Text>
      <Text style={[styles.subtitle, {width: "80%"}]} onPress={props.touchTitle}>Austin, Texas</Text>
      <Image style={{height: "100%", zIndex: -2, position: "absolute"}} resizeMode="contain" resizeMethod="scale" source={mapImg}/>

      
      <TouchableOpacity onPress={props.createEvent} style={[styles.link, {marginTop: 350}]}>
        <Card color={brandColor} style={{ height: "100%", }}>
            <Text style={[styles.subcontent, { textAlign: 'center' }]}>Create Plans</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowInput(!showInput)} style={{width: "92%", height: 50, marginBottom: 20}}>
        <Card color={brandSubColor} style={{ height: "100%", }}>
            <Text style={[styles.subcontent, { textAlign: 'center' }]}>Vote on Plans</Text>
        </Card>
      </TouchableOpacity>

      {showInput && 
        <View style={styles.IDBox}> 
          <TextInput style={styles.IDInput} value={IDInput} onChangeText={text => setIDInput(text)}/>
          <TouchableOpacity onPress={() => props.getEventById(IDInput)} style={[styles.linkBox, {marginTop: -5}]}>
            <Card color={brandSubColor} style={{ height: "100%", width: "60%"}}>
              <Text style={[styles.subcontent, { textAlign: 'center' }]}>Go!</Text>
            </Card>
          </TouchableOpacity>
        </View>
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  createEvent: {
    width: "60%",
    backgroundColor: "rgba(0, 50, 255, 0.4)",
    height: 80,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  link: {
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  subtitle: {
    fontSize: RFValue(18),
    textAlign: "left",
    color: "black",
    fontWeight: "300"
  },
  title: {
    fontSize: RFValue(24),
    fontWeight: "bold",
    marginTop: 15,
    color: "black",
    textAlign: "left"
  },
  linkBox: {
    width: "95%",
    flexWrap: "wrap",
    height: 40,
    justifyContent: "center",
    alignContent: "center"
  },
  subcontent: {
    fontSize: 20,
    color: 'white'
  },
  IDBox: {
    width: "100%", 
    alignItems: "center",
    marginTop: 20,
  },
  IDInput: {
    width: "70%",
    backgroundColor: "white",
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 2
  },
 
  
})
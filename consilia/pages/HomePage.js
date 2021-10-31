import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Touchable, ImageBackground } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ProfileCorner from '../components/ProfileCorner';
import { UserInfoContext } from '../UserInfo';
import Card from '../components/card'
import { brandColor, brandSubColor } from '../constants/colors'
import mapImg from '../constants/mapfad.png';
export default function HomePage(props) {
  const userInfo = useContext(UserInfoContext)
  
 



  /*seEffect(() => {
    setUserInfo(props.userInfo)
    //console.log("HomePage props " + props.userInfo)
    //console.log("HomePage " + userInfo)
    //console.log(userInfo)
  }, [props.userInfo])*/
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {width: "80%"}]}  onPress={props.touchTitle}>Welcome, {userInfo.first}</Text>
      <Text style={[styles.subtitle, {width: "80%"}]} onPress={props.touchTitle}>Austin, Texas</Text>
  <Image style={{height: "100%", zIndex: -2, position: "absolute"}} resizeMode="contain" resizeMethod="scale" source={mapImg}/>

    <View style={{height: 350}}>

      </View>
      <TouchableOpacity onPress={props.createEvent} style={[styles.link, {marginTop:12}]}>
            <Card color={brandColor} style={{ height: "100%", }}>
                <Text style={[styles.subcontent, { textAlign: 'center' }]}>Create Plans</Text>
            </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.createEvent} style={styles.link}>
            <Card color={brandSubColor} style={{ height: "100%", }}>
                <Text style={[styles.subcontent, { textAlign: 'center' }]}>Vote on Plans</Text>
            </Card>
      </TouchableOpacity>
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
})
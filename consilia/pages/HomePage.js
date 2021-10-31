import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Touchable } from 'react-native';
import ProfileCorner from '../components/ProfileCorner';
import { UserInfoContext } from '../contexts/UserInfo';

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
      <ProfileCorner 
        context={props.context}
        userInfo={userInfo}
        src={props.src}
        onPress={props.editProfile}
      />
      <Text style={styles.title} onPress={props.touchTitle}>Consilia</Text>
      <TouchableOpacity style={styles.createEvent} onPress={props.createEvent}>
        <Text style={{fontSize: 18}}>Create Event</Text>
      </TouchableOpacity>
      <View style={styles.linkBox}>
        <TextInput style={styles.linkInput}></TextInput>
        <TouchableOpacity onPress={props.goToLink}><Text>Go to link</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  linkInput: {
    width: "60%",
    marginRight: 10,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 2,
  }, 
  title: {
    fontSize: 36,
    marginTop: 15,
    marginBottom: 48,
  },
  linkBox: {
    width: "95%",
    flexWrap: "wrap",
    height: 40,
    justifyContent: "center",
    alignContent: "center"
  }
})
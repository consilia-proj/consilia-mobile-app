import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import ProfileCorner from '../components/ProfileCorner';
import { UserInfoContext } from '../contexts/UserInfo';
import Card from '../components/card'
import { brandColor } from '../constants/colors';
import { brandName } from '../constants/strings';
import {FeatureCard} from '../components/card';
import { RFValue } from "react-native-responsive-fontsize";

export default function NameInput(props) {
  const userInfo = useContext(UserInfoContext)
  const [first, setFirst] = useState(userInfo && userInfo.first ? userInfo.first : "")
  const [last, setLast] = useState(userInfo && userInfo.last ? userInfo.last : "")


  return (
    <View style={styles.container}>
        <Text style={[styles.title, { textAlign: 'center', marginTop: RFValue(50) }]}>What's Your Name?</Text>
        <Text style={{color: "black", textAlign: "center", maxWidth: "90%"}}>Tell us so everyone knows what to call you.</Text>
       <View style={[styles.containersm, {marginTop: RFValue(200), width: "100%"}]}>
          <TextInput
              style={[styles.input, props.style]}
              value={props.value}
              placeholder={"First Name"}
              placeholderTextColor="#bababa"
              color="#343434"
              onChangeText={(e) => { setFirst(e) }}
          />
          <TextInput
              style={[styles.input, props.style]}
              value={props.value}
              placeholder={"Last Name"}
              color="#343434"
              placeholderTextColor="#bababa"
              onChangeText={(e) => { setLast(e) }}
          />
        </View>
        <TouchableOpacity onPress={() => props.onSubmit(first, last)} style={styles.link}>
            <Card color={brandColor} style={{ height: "100%", }}>
                <Text style={[styles.subcontent, { textAlign: 'center' }]}>Continue</Text>
            </Card>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(225,225,225,.75)',
    padding: 5,
    width: "90%",
    marginBottom: 10
},
  link: {
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#FFFFFF"
  },
  containersm: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: RFValue(25),
    fontWeight: "bold",
    color: "#000000"
  },
    subcontent: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
})
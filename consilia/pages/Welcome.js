import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import ProfileCorner from '../components/ProfileCorner';
import { UserInfoContext } from '../UserInfo';
import Card from '../components/card'
import { brandColor } from '../constants/colors';
import { brandName } from '../constants/strings';
import {FeatureCard} from '../components/card';
import { RFValue } from "react-native-responsive-fontsize";

export default function Welcome(props) {
  const userInfo = useContext(UserInfoContext)


  return (
    <View style={styles.container}>
        <Text style={[styles.title, { textAlign: 'center', marginTop: RFValue(50) }]}>Welcome to <Text style={{color: brandColor}}>{brandName}</Text></Text>
    
        <View style={{ justifyContent: 'center', marginTop: RFValue(70)}}>
          <FeatureCard title="Find Local Places" content={brandName + " connects you to local businesses"} icon="bookmarks" iconcolor={"#000000"} />
          <FeatureCard title="Choose What To Do" content="Roomy lets you communicate with roomates in an effective manner to keep on the same page." icon="chatbubbles" iconcolor={"#000000"} />
          <FeatureCard title="Have Fun" content="Roomy makes shopping easier by allowing you to split shopping bills and have a shared shopping list." icon="cart" iconcolor={"#000000"} />
        </View>

        <TouchableOpacity onPress={props.nextPage} style={styles.link}>
            <Card color={brandColor} style={{ height: "100%", }}>
                <Text style={[styles.subcontent, { textAlign: 'center' }]}>Continue</Text>
            </Card>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
link: {
        height: 90,
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: "100%",
        position: 'absolute',
        bottom: RFValue(50)
      },
  container: {
    height: '100%',
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
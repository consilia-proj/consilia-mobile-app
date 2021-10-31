import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import ProfileCorner from '../components/ProfileCorner';

export default function FirstTime(props) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consilia</Text>
      <TextInput style={styles.nameInput}></TextInput>
      <Text style={styles.nameTxt}>First</Text>
      <TextInput style={styles.nameInput}></TextInput>
      <Text style={styles.nameTxt}>Last</Text>
      <TouchableOpacity styles={styles.pfpButton}>
        <Image style={styles.pfp} source={require("../assets/images/placeholder.jpg")}></Image>
      </TouchableOpacity>
      <Text style={styles.nameTxt}>Profile Picture (optional)</Text>
      <TouchableOpacity onPress={props.onSubmit} style={styles.continueButton}>
        <Text style={{fontSize: 15}}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
    marginTop: 15,
    marginBottom: 48,
  },
  nameInput: {
    width: "60%",
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 2,
    marginBottom: 2,
  },
  nameTxt: {
    marginBottom: 50,
    color: "#333",
  },
  continueButton: {
    width: "50%",
    height: 50,
    backgroundColor: "rgba(0, 50, 255, .4)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  pfp: {
    marginTop: 10,
    marginBottom: 5,
    height: 150,
    width: 150,
    borderRadius: 75
  },
})
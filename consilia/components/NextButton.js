import React from 'react';
import Card from '../components/card';
import { brandColor } from '../constants/colors';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NextButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={styles.link}>
            <Card color={props.disabled ? "#aaaaaa" : brandColor} style={{ height: "100%", }}>
                <Text style={[styles.subcontent, { textAlign: 'center' }]}>Continue</Text>
            </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
  },

  subcontent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
})
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EventType from '../components/EventType';

export default function CategorySelector(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Category:</Text>
      {props.categories && props.categories.map((cat, i) => (
        <EventType 
          onPress={props.onSubmit} 
          color={`rgba(${i % 3 == 0 ? 255 : 0}, ${i % 3 == 1 ? 255 : 0}, ${i % 3 == 2 ? 255 : 0}, .2)`}
          text={cat}
        />
      ))}
      <TouchableOpacity onPress={props.goBack}>
        <Text>Go back</Text>
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
    fontSize: 32,
    marginTop: 23,
    marginBottom: 40,
  },
})
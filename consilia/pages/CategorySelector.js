import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import EventType from '../components/EventType';
import NextButton from '../components/NextButton';

export default function CategorySelector(props) {
  const [category, setCategory] = useState("");

  function makeGroup() {
    props.onSubmit()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Category:</Text>
      {(props.groupName || props.date) && <Text style={styles.groupInfo}>{props.groupName} {props.date}</Text>}
      <ScrollView style={{flexGrow: 0, width: "100%", maxHeight: 400, marginBottom: 20}} contentContainerStyle={{alignItems: "center"}}>
      {props.categories && props.categories.map((cat, i) => {
        let mod = i % 6
        let red = (mod <= 2 || mod == 5) ? 255 : 0
        let green = (mod == 1) ? 127 : (mod == 2 || mod == 3) ? 255 : 0
        let blue = (mod >= 4) ? 255 : 0
        let opacity = (category == cat) ? .7 : .2
        return (
          <EventType 
            onPress={() => setCategory(cat)} 
            color={`rgba(${red}, ${green}, ${blue}, ${opacity})`}
            text={cat}
            key={i}
            selected={(category == cat)}
          />
        )
      })}
      </ScrollView>
      <NextButton onPress={makeGroup} />
      <TouchableOpacity style={{marginTop: 15}} onPress={props.goBack}>
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
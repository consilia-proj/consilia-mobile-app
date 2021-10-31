import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import EventType from '../components/EventType';
import NextButton from '../components/NextButton';
import { GroupInfoContext } from '../contexts/GroupInfo';

export default function CategorySelector(props) {
  const [category, setCategory] = useState("");
  const groupInfo = useContext(GroupInfoContext)


  function makeGroup() {
    console.log(category)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...groupInfo,
        startDate: groupInfo.startDate.toISOString().slice(0, -5),
        type: category
      })
    };
    fetch('http://35.239.35.148/Event/', requestOptions)
      .then(response => response.json())
      .then(data => {console.log(data); props.onSubmit(data)});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Category</Text>
      {groupInfo.name && <Text style={styles.groupInfo}>{groupInfo.name}</Text>}
      {groupInfo.startDate && <Text style={styles.groupInfo}>{groupInfo.startDate.toString().split(" GMT")[0].slice(0, -3)}</Text>}

      <ScrollView style={{flexGrow: 0, width: "100%", maxHeight: 400, marginBottom: 20}} fadingEdgeLength={100} contentContainerStyle={{alignItems: "center"}}>
      {props.categories && props.categories.map((cat, i) => {
        let mod = i % 6
        let red = (mod <= 2 || mod == 5) ? 255 : 0
        let green = (mod == 1) ? 127 : (mod == 2 || mod == 3) ? 255 : 0
        let blue = (mod >= 4) ? 255 : 0
        let opacity = (category == cat) ? .7 : .2
        return (
          <EventType 
            onPress={() => {setCategory(cat)}} 
            color={`rgba(${red}, ${green}, ${blue}, .4)`}
            text={cat}
            key={i}
            selected={(category == cat)}
          />
        )
      })}
      </ScrollView>
      <NextButton onPress={() => makeGroup()}></NextButton>
      <TouchableOpacity onPress={props.goBack}>
        <Text style={{color: "black", marginTop: 20}}>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "white"
  },
groupInfo: {
  color: "black"
},
  title: {
    fontSize: 32,
    color: "black",
    marginTop: 23,
    marginBottom: 35,
  },
})
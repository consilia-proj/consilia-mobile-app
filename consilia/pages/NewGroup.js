import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import NextButton from '../components/NextButton';
import DatePicker from 'react-native-date-picker'
import { UserInfoContext } from '../contexts/UserInfo';
import { GroupInfoContext } from '../contexts/GroupInfo';


export default function NewGroup(props) {
  const userInfo = useContext(UserInfoContext)
  const groupInfo = useContext(GroupInfoContext)
  const [groupName, setGroupName] = useState(groupInfo && groupInfo.groupName ? groupInfo.groupName : "")
  const [date, setDate] = useState(groupInfo && groupInfo.date ? groupInfo.date : new Date())

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Plans</Text>
      <TextInput
              style={[styles.input, props.style]}
              value={props.value}
              placeholder={"Group Name"}
              color="#343434"
              placeholderTextColor="#bababa"
              onChangeText={(e) => { setGroupName(e) }}
          />
      <TextInput 
        editable={false} 
        style={styles.input} 
        placeholderTextColor="#bababa"
        color="#343434"
        value={date.toString().split(" GMT")[0]}
      />
      <Text style={styles.inputLabel}>Date</Text>
      <DatePicker date={date} onDateChange={setDate} style={{marginTop: -60}} />
      <NextButton onPress={() => {props.onNext(groupName, date)}} 
        disabled={groupName.trim().length == 0}
      />
      <TouchableOpacity style={styles.goHome} onPress={props.goHome}>
        <Text>Return Home</Text>
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
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "white"
  },
  title: {
    fontSize: 32,
    marginTop: 15,
    marginBottom: 48,
    color: "black"
  },
  inputLabel: {
    marginTop: 3,
    marginBottom: 60,
    color: "#222",
    fontSize: 16
  },
  goHome: {
    marginTop: 30
  }
})
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
      <Text style={styles.title}>Create New Event</Text>
      <TextInput style={styles.input} 
        value={groupName} 
        onChangeText={text => setGroupName(text)}
      />
      <Text style={styles.inputLabel}>Group Name</Text>
      <TextInput 
        editable={false} 
        style={styles.input} 
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
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    marginTop: 15,
    marginBottom: 48,
  },
  input: {
    width: "60%",
    marginRight: 10,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 2,
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
import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import NextButton from '../components/NextButton';
import TransportMode from '../components/TransportMode';
import { GroupInfoContext } from '../contexts/GroupInfo';
import Card from '../components/card';
import { MicroFeatureCard } from '../components/card';
import { brandColor } from '../constants/colors';
import Icon  from 'react-native-vector-icons/Ionicons';
import { brandName } from '../constants/strings';

export default function Transport(props) {
  const groupInfo = useContext(GroupInfoContext)
  const [transportIndex, setTrans] = useState(0.0);
  let r = ["Get to places nearby","Get to places far away","Get around town",""]
  return (
    <View style={styles.container}>
      <Text style={{fontSize: RFValue(25), color: "black", marginTop: RFValue(50)}}>How Can You Get There?</Text>
      <Text style={{fontSize: RFValue(10), color: "black"}}>We need this so we know how far you can travel to a place.</Text>
      {/* <Text>Group ID: {groupInfo && groupInfo.eventID ? groupInfo.eventID : "null"}</Text> */}
      <ScrollView style={styles.options} contentContainerStyle={styles.optionsCont}>
      
        {["Walk", "Car", "Bus", "Uber"].map((vehicle, i) => (

           <Card key={i} color={"white"} style={{ width: "90%",maxHeight: RFValue(175), borderColor: (i == transportIndex) ? brandColor : "black", borderWidth:  1}}>
           <TouchableOpacity onPress={() => { setTrans(i) }} ><View>
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
               <View>
                 <Text style={[styles.subtitle, { marginBottom: 2, maxWidth: 250, color: "black" }]}>{vehicle}</Text>
                 <Text style={{color: "black", fontSize: RFValue(10)}}>{vehicle == "Uber" ? "10% Off when booked through "+brandName : r[i]}</Text>
               </View>
     
               <Icon name={(i != transportIndex) ? 'md-radio-button-off' : 'md-radio-button-on'} size={24} color={(i == transportIndex) ? brandColor : "black"} />
     
              </View>
              </View>
             </TouchableOpacity>
           </Card>

        ))}
      </ScrollView> 
      <NextButton onPress={props.onSubmit}/>
      <TouchableOpacity style={{marginTop: 30}} onPress={props.goHome}>
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
    flex: 1,
    backgroundColor: "white"
  },
  options: {
    width: "90%",
    flexGrow: 0,    
  },
  optionsCont: {

  },
  goHome: {

  },
  next: {
    width: "55%",
    height: 60,
    backgroundColor: "rgba(0, 50, 255, .4)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 30
  }
  
})
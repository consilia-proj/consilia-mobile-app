import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Card = (props) =>
(
  <View style={[props.style, { borderRadius: RFValue(12), padding: 10, paddingHorizontal: 10, marginTop: 30, marginHorizontal: 15, backgroundColor: props.color }]}>
    {props.children}
  </View>
);

export const LongCard = (props) =>
(
  <Card style={{width: "90%"}} color={props.color}>
     {props.children}
  </Card>
);


export const LongTitledCard = (props) =>
(
  <LongCard color={props.color} style={props.style}>

      <Text style={[styles.title, {maxWidth: 250, color:props.titleColor, }]}>{props.title}</Text>

    {props.children}

  </LongCard>
);

export const TitledCard = (props) =>
(
  <Card color={props.color} style={props.style}>

      <Text style={[styles.title, {maxWidth: 250, color:props.titleColor}]}>{props.title}</Text>
    {props.children}

  </Card>
);

export const IconedTitledCard = (props) =>
(
  <Card color={props.color}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
      <Text style={[styles.title, {marginBottom:10, maxWidth: 250}]}>{props.title}</Text>
      <Ionicons name={props.icon} size={64} color="#fff"/>
    </View>
    {props.children}

  </Card>
);




export const TransparentCard = (props) =>
(
  <View style={[props.style, { backgroundColor: "transparent" }]}>
    {props.children}
  </View>
);

export const AllDoneCard = (props) =>
(
  <View lightColor="rgb(52,199,89)" darkColor="rgb(48,209,88)" style={[props.style, { borderRadius: 15, padding: 10, paddingHorizontal: 20, marginTop: 30, marginHorizontal: 15,flex: 1, alignItems:'center' }]}>
     <Text style={[styles.title, {marginBottom:10}]}>That's all for now!</Text>
     <Ionicons name="md-checkmark-circle" size={32} color="#fff"/>
  </View>
);


export const FeatureCard = (props) =>
(
  <View style={[props.style, { borderRadius: 15, maxWidth:"95%", marginLeft: RFValue(10), backgroundColor: "transparent", marginVertical: RFValue(15),  }]}>
     <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: "transparent" }}>
     <Icon name={props.icon} size={RFValue(50)} color={props.iconcolor}/>
     <View style={{paddingLeft:RFValue(20), paddingRight:RFValue(50), minWidth:325, maxWidth:"95%", backgroundColor: "transparent"}}>
        <Text style={[styles.featTitle, {color: props.iconcolor}]}>{props.title}</Text>
        <Text style={{color: '#000000'}}>{props.content}</Text>
     </View>
     </View>
  </View>
);

export const MicroFeatureCard = (props) =>
(
  <View style={[props.style, { borderRadius: 15, marginHorizontal: 10, backgroundColor: "transparent", marginVertical: RFPercentage(.5) }]}>
     <View style={{ flexDirection: 'row',  backgroundColor: "transparent" }}>
     <Icon name={props.icon} size={RFValue(24)} color={props.iconcolor}/>
     <View style={{marginTop:RFValue(5), marginLeft:20, backgroundColor: "transparent"}}>
      <Text style={{color: '#000000', fontSize: RFValue(10)}}>{props.content}</Text>
     </View>
     </View>
  </View>
);


const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    fontSize: 18,
    height: 44
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "transparent"
    // paddingTop: 30
    // justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000'
  },
  featTitle: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#000000'
  },
  subheader: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#000000'
  },
  listItemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
export default Card;
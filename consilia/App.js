import React, {useState, useEffect, useContext, createContext} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategorySelector from './pages/CategorySelector';
import HomePage from './pages/HomePage';
import Welcome from './pages/Welcome';
import NameInput from './pages/NameInput';
import NewGroup from './pages/NewGroup';
import Transport from './pages/Transport';
import PlaceVotes from './pages/PlaceVotes'
import FirstTime from './pages/FirstTime';
import Results from './pages/Results';
import { UserInfoContext } from './contexts/UserInfo';
import { GroupInfoContext } from './contexts/GroupInfo'
import Geolocation from 'react-native-geolocation-service';

export default function App() {
  function getEventById(id) {
    console.log(id);
    fetch(`http://35.239.35.148/Event/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGroupInfo(data), setPage(pickTransport)
      });
  }

  function fetchUserInfo() {
    setUserInfo({first: "Ben", last: "Gordon", pfp: null}) 
  }

 
  

  const firstTime = <NameInput 
    userInfo={userInfo}
    onSubmit={(first, last, uuid) => {
      setUserInfo({first: first, last: last, uuid: uuid, pfp: null})
      setPage(home)
    }
  }/>

  const welcome = <Welcome
    nextPage={() => setPage(firstTime)}
  />

  const home = <HomePage 
    userInfo={userInfo}
    createEvent={() => setPage(newGroup)} 
    getEventById={(id) => getEventById(id)}
    editProfile={() => setPage(firstTime)}
  />

  const newGroup = <NewGroup 
    goHome={() => setPage(home)} 
    onNext={(name, startDate) => {
      //console.log("newGroup onNext")
      //console.log(groupInfo)
      setGroupInfo({...groupInfo, ...location, name: name, startDate: startDate, range: 500})
      console.log(location)
      //console.log(groupInfo)
      setPage(pickCategory)
    }}
  />
  const pickCategory = <CategorySelector 
    goBack={() => setPage(newGroup)} 
    onSubmit={(newGroupInfo) => {
      setGroupInfo(newGroupInfo)
      setPage(pickTransport)
    }}
    categories={["Social", "Games", "Entertainment", "Dining", "Seasonal", "Outdoors"]}
  />

  const pickTransport = <Transport 
    onSubmit={() => setPage(voteOnPlaces)}
    goHome={() => {
      setPage(home)
      setGroupInfo({...location})
    }}
  />
  const voteOnPlaces = <PlaceVotes
    goHome={() => {
      setPage(home)
      setGroupInfo({...location})
    }}

    goToResults={
      () => setPage(results)
    }
  />

  const results = <Results/>

  //const third = <EventPage link="consilia.io/ACL" title="Austin City Limits" distance="3 miles" rating="4"/>
  const [page, setPage] = useState(welcome);
  const [userInfo, setUserInfo] = useState(/*{first: "Ben", last: "Gordon", pfp: null}*/null);
  const [groupInfo, setGroupInfo] = useState(null);
  const [location, setLocation] = useState({locationLat: 30.286274, locationLong: -97.738035});


  const getLocation = /*async*/ () => {
    //const hasPermission = await hasLocationPermission();

    //if (/*!hasPermission*/true) {
      return {locationLat: 30.286274, locationLong: -97.738035};
    //}

  
  };


  useEffect(() => {
    setLocation(getLocation())
    setGroupInfo({...groupInfo, ...location})
    userInfo && userInfo.first && userInfo.last && setPage(home);
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <UserInfoContext.Provider value={userInfo}>
        <GroupInfoContext.Provider value={groupInfo}>
          {page}
        </GroupInfoContext.Provider>
      </UserInfoContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});


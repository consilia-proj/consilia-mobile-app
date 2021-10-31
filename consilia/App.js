import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategorySelector from './pages/CategorySelector';
import HomePage from './pages/HomePage';

import NewGroup from './pages/NewGroup';
import Transport from './pages/Transport';
import PlaceVotes from './pages/PlaceVotes'
import FirstTime from './pages/FirstTime';
import Results from './pages/Results';

export default function App() {
  function fetchNewUrl() {

  }

  function fetchUserInfo() {
    setUserInfo({first: "Ben", last: "Gordon", pfp: null}) 
  }
  
  const firstTime = <FirstTime onSubmit={() => {
    setPage(home)
  }}/>
  const home = <HomePage 
    userInfo={userInfo}
    createEvent={() => setPage(newGroup)} 
    goToLink={() => setPage(pickTransport)}
    first={userInfo && userInfo.first ? userInfo.first : "First"}
    last={userInfo && userInfo.last ? userInfo.last : "Last"}
    editProfile={() => setPage(firstTime)}
  />

  const newGroup = <NewGroup 
    goHome={() => setPage(home)} 
    onNext={() => setPage(pickCategory)}
  />
  const pickCategory = <CategorySelector 
    goBack={() => setPage(newGroup)} 
    onSubmit={() => {
      fetchNewUrl()
      setPage(pickTransport)
    }}
    categories={["Social", "Games", "Seasonal"]}
  />

  const pickTransport = <Transport 
    onSubmit={() => setPage(voteOnPlaces)}
    goHome={() => setPage(home)}
  />
  const voteOnPlaces = <PlaceVotes
    goHome={() => setPage(home)}
  />

  const results = <Results/>

  //const third = <EventPage link="consilia.io/ACL" title="Austin City Limits" distance="3 miles" rating="4"/>
  const [page, setPage] = useState(firstTime);
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    fetchUserInfo();
    console.log(userInfo)
    userInfo && userInfo.first && userInfo.last && setPage(home);
  }, [])


  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      {page}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});


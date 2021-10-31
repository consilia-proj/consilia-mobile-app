import React, {useState, useEffect, useContext, createContext} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategorySelector from './pages/CategorySelector';
import HomePage from './pages/HomePage';

import NewGroup from './pages/NewGroup';
import Transport from './pages/Transport';
import PlaceVotes from './pages/PlaceVotes'
import FirstTime from './pages/FirstTime';
import Results from './pages/Results';

import { UserInfoContext } from './contexts/UserInfo';
import { GroupInfoContext } from './contexts/GroupInfo'

export default function App() {
  function fetchNewUrl() {
  }

  function fetchUserInfo() {
    setUserInfo({first: "Ben", last: "Gordon", pfp: null}) 
  }
  
  const firstTime = <FirstTime 
    userInfo={userInfo}
    onSubmit={(first, last) => {
      setUserInfo({first: first, last: last, pfp: null})
      setPage(home)
    }
  }/>
  const home = <HomePage 
    userInfo={userInfo}
    createEvent={() => setPage(newGroup)} 
    goToLink={() => setPage(pickTransport)}
    editProfile={() => setPage(firstTime)}
  />

  const newGroup = <NewGroup 
    goHome={() => setPage(home)} 
    onNext={(groupName, date) => {
      setGroupInfo({groupName: groupName, date: date})
      //console.log(groupInfo)
      setPage(pickCategory)
    }}
  />
  const pickCategory = <CategorySelector 
    goBack={() => setPage(newGroup)} 
    onSubmit={() => {
      fetchNewUrl()
      setPage(pickTransport)
    }}
    categories={["Social", "Games", "Entertainment", "Dining", "Seasonal", "Outdoors"]}
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
  const [userInfo, setUserInfo] = useState(/*{first: "Ben", last: "Gordon", pfp: null}*/null);
  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
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


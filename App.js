import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import regisPage from './components/page/regisPage'
import userListPage from './components/page/userListPage'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState('Registration')  

  const changePage = (pageName) => {
    setPage(pageName)
  }

  if(page == 'Registration')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <regisPage registerButtonHandler={() => changePage('Result')}/>
      </View>
    )
  else if(page == 'Result')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <userListPage/>
      </View>
    )
};

export default App;
import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    </>
  );
};

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {RecoilRoot} from 'recoil';
import AppNavigator from './src';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['[react-native-gesture-handler]']);
const App = () => {
  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
};

export default App;

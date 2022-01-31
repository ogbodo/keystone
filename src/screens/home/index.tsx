import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../utils/color';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', color: Colors.BLACK_COLOR}}>
        Welcome to Home Screen.
      </Text>
    </View>
  );
};

export default HomeScreen;

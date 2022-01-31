import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../utils/color';

const MenuScreen = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', color: Colors.BLACK_COLOR}}>
        Welcome to Menu Screen.
      </Text>
    </View>
  );
};

export default MenuScreen;

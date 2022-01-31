import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Colors} from './utils/color';
import BottomNavigator from './navigators/bottom';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleStyle: {
            color: Colors.BLACK_COLOR,
            fontSize: WP(4.5),
            textTransform: 'capitalize',
          },
        }}>
        <RootStack.Screen name="MainScreen" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

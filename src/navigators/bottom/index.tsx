import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../utils/color';
import Screens from '../../screens';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import Header from '../../components/header';
import {useSetRecoilState} from 'recoil';
import {globalDataState} from '../../global';

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  const setGlobalData = useSetRecoilState(globalDataState);
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.SECONDARY,
      }}
      initialRouteName="Inventory">
      <BottomTab.Screen
        name="Home"
        component={Screens.HomeScreen}
        options={{
          header: () => <Header title="Home" />,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Insurance"
        component={Screens.InsuranceScreen}
        options={{
          header: () => <Header title="Insurance" />,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="umbrella" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Inventory"
        component={Screens.InventoryScreen}
        options={{
          header: () => (
            <Header
              title="Inventory"
              icon={() => (
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={WP(10)}
                  color={Colors.SECONDARY}
                  onPress={() => {
                    setGlobalData(prev => ({...prev, showAddModal: true}));
                  }}
                />
              )}
            />
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="inventory"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Inquiry"
        component={Screens.InquiryScreen}
        options={{
          header: () => <Header title="Inquiry" />,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="md-search-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={Screens.MenuScreen}
        options={{
          header: () => <Header title="Menu" />,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="menu" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

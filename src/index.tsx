import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Colors} from './utils/color';
import BottomNavigator from './navigators/bottom';
import CustomModal from './components/modal';
import AddInventory from './screens/inventory/add-inventory';
import {useRecoilValue} from 'recoil';
import {globalDataState} from './global';

const RootStack = createStackNavigator();

const NavigatorContent = () => (
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

export default function AppNavigator() {
  const globalData = useRecoilValue(globalDataState);
  return (
    <>
      <NavigatorContent />
      <CustomModal
        isVisible={globalData.showAddModal}
        modalProps={{backdropOpacity: 0.7}}>
        <AddInventory />
      </CustomModal>
    </>
  );
}

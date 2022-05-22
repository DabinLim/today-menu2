import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationTheme} from '../../../theme/appTheme';
import BottomTabNavigator from '../../BottomTabNavigation';
import {RootStackParams, ScreenName} from '../types';

const Stack = createNativeStackNavigator<RootStackParams>();

const MainFlow = () => {
  return (
    <Stack.Navigator
      //   initialRouteName={ScreenName.BOTTOM_TAB}
      screenOptions={navigationTheme.navScreenOptions}>
      <Stack.Group>
        <Stack.Screen
          name={ScreenName.BOTTOM_TAB}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainFlow;

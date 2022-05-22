import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../../../screens/auth/SignInScreen';
import SignUpScreen from '../../../screens/auth/SignUpScreen';
import {navigationTheme} from '../../../theme/appTheme';
import {RootStackParams, ScreenName} from '../types';

const Stack = createNativeStackNavigator<RootStackParams>();

const AuthFlow = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.SIGN_IN}
      screenOptions={navigationTheme.navScreenOptions}>
      <Stack.Group>
        <Stack.Screen
          name={ScreenName.SIGN_IN}
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.SIGN_UP}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthFlow;

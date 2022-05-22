import React from 'react';
import {Text} from 'react-native';
import SafeContainer from '../../../components/atoms/SafeContainer';

const SignInScreen = () => {
  console.log('어이가 없네');
  return (
    <SafeContainer>
      <Text style={{borderWidth: 1}}>SignInScreen</Text>
    </SafeContainer>
  );
};

export default SignInScreen;

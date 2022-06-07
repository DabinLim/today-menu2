import React, {useEffect} from 'react';
import {Text} from 'react-native';
import SafeContainer from '../../../components/atoms/SafeContainer';
import useAuthActions from '../../../hooks/useAuthActions';
import useAuthStore from '../../../hooks/useAuthStore';

const HomeScreen = () => {
  const {user} = useAuthStore();
  const {setUser} = useAuthActions();
  useEffect(() => {
    setUser({
      id: 0,
      name: '12314',
    });
  }, []);
  return (
    <SafeContainer>
      <Text>HomeScreen</Text>
    </SafeContainer>
  );
};

export default HomeScreen;

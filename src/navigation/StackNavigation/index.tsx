import React, {createRef, ReactElement, ReactNode} from 'react';
import {navigationTheme} from '../../theme/appTheme';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';

export const navigationRef = createRef<NavigationContainerRef<any>>();

interface StackNavigationProps {
  children?: ReactNode;
}

const StackNavigation = ({children}: StackNavigationProps): ReactElement => {
  //   let user = true;
  let routeNameRef: string | undefined;
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={navigationTheme.navContainer}
      independent
      onReady={() => {
        routeNameRef = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (currentRouteName && previousRouteName !== currentRouteName) {
          // todo: analyze screenName
        }
        routeNameRef = currentRouteName;
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      {/* <AuthFlow /> */}
      <MainFlow />
      {/* {user ? <MainFlow /> : <AuthFlow />} */}
      {children}
    </NavigationContainer>
  );
};

export default StackNavigation;

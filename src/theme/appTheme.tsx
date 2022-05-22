import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {
  Theme as NavigationContainerTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {Platform} from 'react-native';

type NavigationTheme = {
  navContainer: NavigationContainerTheme;
  navScreenOptions: NativeStackNavigationOptions;
};

export const navigationTheme: NavigationTheme = {
  navContainer: {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFD338',
      background: '#ffffff',
      notification: '#E60A14',
      text: '#2E2E30',
    },
  },
  navScreenOptions: {
    headerTitleStyle: {
      //   fontFamily: fonts.BOLD,
      fontSize: 16,
      //   color: colors.CARPET_BLACK,
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    gestureEnabled: Platform.OS === 'ios',
  },
};

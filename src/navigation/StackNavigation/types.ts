import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabNavigationScreenParams} from '../BottomTabNavigation/types';

export type RootStackParams = {
  [ScreenName.SIGN_IN]: undefined;
  [ScreenName.SIGN_UP]: undefined;
  [ScreenName.BOTTOM_TAB]: MainTabNavigationScreenParams;
};

export enum ScreenName {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  BOTTOM_TAB = 'BOTTOM_TAB',
  HOME = 'HOME',
  FOOD_MAIN = 'FOOD_MAIN',
  COMMUNITY_MAIN = 'COMMUNITY_MAIN',
  MY_PAGE = 'MY_PAGE',
}

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParams>;

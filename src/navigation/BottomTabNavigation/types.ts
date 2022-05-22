import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {RootStackNavigationProp, ScreenName} from '../StackNavigation/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type MainTabParams = {
  [ScreenName.HOME]: undefined;
  [ScreenName.FOOD_MAIN]: undefined;
  [ScreenName.COMMUNITY_MAIN]: undefined;
  [ScreenName.MY_PAGE]: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParams>
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParams>;

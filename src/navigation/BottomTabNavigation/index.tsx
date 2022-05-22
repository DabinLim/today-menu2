import React from 'react';
import {ImageSourcePropType, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParams} from './types';
import {ScreenName} from '../StackNavigation/types';
import HomeScreen from '../../screens/main/HomeScreen';
import FoodMainScreen from '../../screens/main/FoodMainScreen';
import CommunityMainScreen from '../../screens/main/CommunityMainScreen';
import MyPageScreen from '../../screens/main/MyPageScreen';
import strings from '../../constants/strings';

const Tab = createBottomTabNavigator<MainTabParams>();

const BottomTabNavigator = () => {
  const renderTabBarIcon = (
    focused: boolean,
    routeName: keyof MainTabParams,
  ) => {
    // let icon: ImageSourcePropType;
    let name: string;

    switch (routeName) {
      case ScreenName.HOME:
        // icon = focused ? tabIcon.HOME_FILL : tabIcon.HOME;
        name = strings.HOME;
        break;
      case ScreenName.FOOD_MAIN:
        // icon = focused ? tabIcon.DISCOUNT_FILL : tabIcon.DISCOUNT;
        name = strings.FOOD_RECOMMENDATION;
        break;
      case ScreenName.COMMUNITY_MAIN:
        // icon = focused ? tabIcon.MY_ACCOUNT_FILL : tabIcon.MY_ACCOUNT;
        name = strings.COMMUNITY;
        break;
      case ScreenName.MY_PAGE:
        name = strings.MY;
        break;
      default:
        return null;
    }

    return <Text>{name}</Text>;
  };

  return (
    <Tab.Navigator
      initialRouteName={ScreenName.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name={ScreenName.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => renderTabBarIcon(focused, ScreenName.HOME),
        }}
      />
      <Tab.Screen
        name={ScreenName.FOOD_MAIN}
        component={FoodMainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            renderTabBarIcon(focused, ScreenName.FOOD_MAIN),
        }}
      />
      <Tab.Screen
        name={ScreenName.COMMUNITY_MAIN}
        component={CommunityMainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            renderTabBarIcon(focused, ScreenName.COMMUNITY_MAIN),
        }}
      />
      <Tab.Screen
        name={ScreenName.MY_PAGE}
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            renderTabBarIcon(focused, ScreenName.MY_PAGE),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

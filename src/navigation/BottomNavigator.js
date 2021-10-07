// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinkScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation, route }) =>{
  return (
    <BottomTab.Navigator initialRouteName = "Links">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
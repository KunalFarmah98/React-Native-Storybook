import React from 'react';

import BottomTabNavigator from './src/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
  );
};

export default App;

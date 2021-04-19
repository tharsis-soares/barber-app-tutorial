import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

import UserContextProvider from './src/contexts/UserContext'

import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <UserContextProvider>    
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}


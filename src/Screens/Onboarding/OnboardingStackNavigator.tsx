import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Name from './Name';
import Document from './Document';
import Phone from './Phone';

import { OnboardingStackParamList } from './types';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Name" >
      <Stack.Screen name="Name" component={Name} 
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80',
        },
        headerTintColor: '#FFF',
        headerHideShadow: true,
      }}/>
      <Stack.Screen name="Document" component={Document} 
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80',
        },
        headerTintColor: '#FFF',
        headerHideShadow: true,
      }}/>
      <Stack.Screen name="Phone" component={Phone} 
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80',
        },
        headerTintColor: '#FFF',
        headerHideShadow: true,
      }}/>
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
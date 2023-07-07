import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Routes} from '../constants/routes';
import DrawerNavigator from './DrawerNavigator';
import Login from '../screens/login';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isSignedIn);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isLoggedIn ? Routes.HOME : Routes.LOGIN}>
      {isLoggedIn ? (
        <Stack.Screen name={Routes.HOME} component={DrawerNavigator} />
      ) : (
        <Stack.Screen name={Routes.LOGIN} component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from '../constants/routes';
import Login from '../screens/login';
import AboutUs from '../screens/about';
import ContactUs from '../screens/contact';
import Users from '../screens/users';
import Gallery from '../screens/gallery';
import colors from '../theme/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.onPrimary,
        headerStyle: {backgroundColor: colors.primary},
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.onPrimary,
        drawerInactiveTintColor: colors.black,
      }}
      initialRouteName={Routes.LOGIN}>
      <Drawer.Screen
        options={{title: 'Users'}}
        name={Routes.USERS}
        component={Users}
      />
      <Drawer.Screen
        options={{title: 'Gallery'}}
        name={Routes.GALLERY}
        component={Gallery}
      />
      <Drawer.Screen
        options={{title: 'About Us'}}
        name={Routes.ABOUT}
        component={AboutUs}
      />
      <Drawer.Screen
        options={{title: 'Contact Us'}}
        name={Routes.CONTACT}
        component={ContactUs}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import AppTabNavigator from './appTabNavigator'
import Header2 from "../components/Header2";
import { strings,currentLocale } from '../i18n';

const DrawerNavigator = createDrawerNavigator(
    {
        Home:
        {
          screen:AppTabNavigator,
        }
    },
    {
      drawerPosition: currentLocale =='ar' ? 'left' : 'right',

        initialRouteName: 'Home',
    }
);
export default DrawerNavigator;

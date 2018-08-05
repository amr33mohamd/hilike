import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

const AuthStack = createStackNavigator(
    {
        SignIn: SignIn,
        SignUp: SignUp
    },
    {
        headerMode: 'none',
        initialRouteName: 'SignIn',
    }
);
export default AuthStack;
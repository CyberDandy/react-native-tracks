import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SplashScreen from "./src/screens/SplashScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import {Provider as AuthProvider} from './src/context/AuthContext'
import {setNavigator} from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    loginFlow:
        createStackNavigator({
            Signup: SignupScreen,
            Signin: SigninScreen
        }),
    mainFlow:
        createBottomTabNavigator({
            trackListFlow:
                createStackNavigator({
                    TrackList: TrackListScreen,
                    TrackDetail: TrackDetailScreen
                }),
            TrackCreate: TrackCreateScreen,
            Account: AccountScreen
        })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={navigator => setNavigator(navigator)}/>
        </AuthProvider>
    );
};

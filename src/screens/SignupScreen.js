import React, {useState, useContext} from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import Spacer from "../components/Spacer";
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({navigation}) => {
    const {state, actions} = useContext(AuthContext);
    const {errorMessage} = state;
    const {signUp} = actions;

    return (
        <View style={styles.container}>
            <AuthForm headerText="Sign up for Tracker"
                      errorMessage={errorMessage}
                      submitButtonTitle="Sign Up"
                      onSubmit={signUp}
            />
            <NavLink
                linkText="Already have an account? Sign in instead."
                routeName="Signin"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignupScreen;

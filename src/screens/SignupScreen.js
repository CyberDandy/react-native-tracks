import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const {state, actions} = useContext(AuthContext);
    const {errorMessage} = state;
    const {signUp, clearErrorMessage} = actions;

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
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

SignupScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignupScreen;

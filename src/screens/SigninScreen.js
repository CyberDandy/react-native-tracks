import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    const {state, actions} = useContext(AuthContext);
    const {errorMessage} = state;
    const {signIn, clearErrorMessage} = actions;

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm headerText="Sign in to your account"
                      errorMessage={errorMessage}
                      submitButtonTitle="Sign In"
                      onSubmit={signIn}
            />
            <NavLink
                linkText="No account yet? Sign up instead."
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SigninScreen;

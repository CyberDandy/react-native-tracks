import React from 'react'
import {Text, Button, StyleSheet} from 'react-native';

const SigninScreen = ({navigation}) => {
    return (
        <>
            <Text>
                Signin Screen
            </Text>
            <Button title="Go to signup"
                    onPress={() => navigation.navigate('Signup')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SigninScreen;

import React from 'react'
import {Text, Button, StyleSheet} from 'react-native';

const SignupScreen = ({navigation}) => {
    return (
        <>
            <Text>
                Signup Screen
            </Text>
            <Button title="Go to signin"
                    onPress={() => navigation.navigate('Signin')}
            />
            <Button title="Go to main flow"
                    onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;

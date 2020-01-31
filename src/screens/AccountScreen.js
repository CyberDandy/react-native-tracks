import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {Button} from "react-native-elements";
import {SafeAreaView} from "react-native";
import {Context as AuthContext} from '../context/AuthContext'
import Spacer from "../components/Spacer";

const AccountScreen = () => {
    const {actions} = useContext(AuthContext);
    const {signOut} = actions;
    return (
        <SafeAreaView forceInstet={{top: 'always'}}>
            <Spacer>
                <Button
                    title='Sign Out'
                    onPress={signOut}
                />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;

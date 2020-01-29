import React from 'react'
import {Text, Button, StyleSheet} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text>
                Track List Screen
            </Text>
            <Button title="Go Track details"
                    onPress={() => navigation.navigate('TrackDetail')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

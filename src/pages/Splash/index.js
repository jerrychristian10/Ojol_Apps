import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 1500)
    })
    return(
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
};

export default Splash;
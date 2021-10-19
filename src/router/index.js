import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="splah" component={} />
        </Stack.Navigator>
    )
}
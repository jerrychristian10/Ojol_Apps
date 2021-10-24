import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils';

const Input = ({placeholder}) => {
    return (
        <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor={colors.default}
            
        />
        );

};

export default Input;

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:colors.default,
        borderRadius:30,
        paddingVertical:18,
        paddingHorizontal:17,
        fontSize:14,
        color:colors.default,
    },
});

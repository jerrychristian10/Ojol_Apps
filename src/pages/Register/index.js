import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/atoms';


const Register = () => {
    return(
        <View style={{padding:16}}>
        <View 
        style={{
            width: 30, 
            height: 30, 
            backgroundColor:'blue'
            }}

            />
        <View 
        style={{
            width:165, 
            height:147, 
            backgroundColor:'orange', 
            marginTop:6
            }}

            />
            <Text 
            style={{
            fontSize:14, 
            fontWeight:'bold', 
            color:'orange', 
            marginTop:17,
            maxWidth:250,
            }}>
            Mohon mengisi data dibawah ini untuk proses pendaftaran
            </Text>
            <Input placeholder="Nama Lengkap"/>
            <Input placeholder="E-mail"/>
            <Input placeholder="Password"/>
        </View>
        
    );
};

export default Register;
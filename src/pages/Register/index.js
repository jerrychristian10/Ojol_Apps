import React from 'react';
import { View, Text, Image } from 'react-native';
import { Input } from '../../components/atoms';
import { colors } from '../../utils';
import { IconBack, regImg } from '../../assets';




const Register = () => {
    return(
        <View style={styles.wrapper.page}>
        {/* <View style={styles.iconBack} /> */}
        <Image source ={IconBack} style={styles.iconBack} />
        <Image source ={regImg} style={styles.illustration} />
        {/* <View style={styles.illustration} /> */}

            <Text 
            style={styles.text}>
            Mohon mengisi data dibawah ini untuk proses pendaftaran
            </Text>
            <View style={styles.space(64)}/>
            <Input placeholder="Nama Lengkap"/>
            <View style={styles.space(33)} />
            <Input placeholder="E-mail"/>
            <View style={styles.space(33) }/>
            <Input placeholder="Password" />
            
        </View>
        
    );
};

const styles = {
    wrapper :{
        page:{padding:16}
    },
    iconBack:{
        width: 30, 
        height: 30, 
        },
    illustration:{
        width:165, 
        height:147,  
        marginTop:6
        },
    text:{
        fontSize:16, 
        fontWeight:'bold', 
        color: colors.default,
        marginTop:17,
        maxWidth:250,
        },
    space:value  => {
        return{
            height: value,
        };
        
    },
};

export default Register;
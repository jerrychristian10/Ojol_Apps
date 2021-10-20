import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton';

const WelcomeAuth =() => {
    return(
        <View 
        style={styles.wrapper.page}>
            <View style ={styles.wrapper.illustration} />
            <Text style={styles.text.welcome}>
            Selamat Datang di GO-JOL
            </Text>
            <ActionButton desc="Silahkan login, jika anda telah memiliki akun" title="Masuk"/>
            <ActionButton desc="Silahkan pilih register jika anda belum memiliki akun" title="Daftar"/>
        </View>
    );
};

const styles = {
    wrapper:{
        page:{
            alignItems:'center', 
            justifyContent: 'center',
            flex: 1,
            backgroundColor:'white'
            },
        illustration:{
            height: 163,
            width: 298,
            backgroundColor: '#ffa502',
            marginBottom: 11
            }, 
    text:{
        welcome:{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffa502',
            marginBottom: 88
            },
    },           
    },
};

export default WelcomeAuth;
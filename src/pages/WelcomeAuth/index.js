import React from 'react';
import { View, Text } from 'react-native';
import {TouchableOpacity} from 'react-native';

const ActionButton = ({desc, title}) => {
    return(
    <View style={{marginBottom: 43, maxWidth: 208}}>
        <Text 
        style={{
            fontSize: 11, 
            color: '#000000',
            textAlign:'center',
            paddingHorizontal: '10%',
            marginBottom: 6
            }}>
            {desc}
        </Text>
        <TouchableOpacity 
        style={{
            backgroundColor:'#ffa502', 
            borderRadius: 25,
            paddingVertical: 13,
        }}>
            <Text 
            style={{
                fontSize:11, 
                fontWeight:'bold',
                color:'white',
                textTransform:'uppercase',
                textAlign:'center'
             }}>
                {title}
            </Text>
        </TouchableOpacity>    
     </View>
    );
};

const WelcomeAuth =() => {
    return(
        <View 
        style={{
            alignItems:'center', 
            justifyContent: 'center',
            flex: 1,
            backgroundColor:'white'
            }}>
            <View style ={{height: 163, width: 298, backgroundColor: '#ffa502', marginBottom: 11}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffa502', marginBottom: 88}}>
            Selamat Datang di GO-JOL
            </Text>
            <ActionButton desc="Silahkan login, jika anda telah memiliki akun" title="Masuk"/>
            <ActionButton desc="Silahkan pilih register jika anda belum memiliki akun" title="Daftar"/>
        </View>
    );
};

export default WelcomeAuth;
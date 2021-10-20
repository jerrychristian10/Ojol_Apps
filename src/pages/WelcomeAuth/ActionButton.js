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

export default ActionButton;
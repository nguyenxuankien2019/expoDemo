import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Header({headerText}) {
    return (
        <View style={styles.header}>
             <Text style={{textAlign:'center'}}>{headerText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignContent:'center',
        width:'100%',
        height: 70
    }
});
import { View, Text } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import React, { useEffect, Component, useState, useContext } from 'react';
import { Colors } from '../../constants/Colors';

export default function SelectBudget() {

    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'',
        })
    },[])

  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor:Colors.WHITE,
        height: '100%',
    }}>
        <Text style={{
            fontFamily: 'poppins-bold',
            fontSize: 35,
            marginTop: 20,
        }}>Select Budget</Text>
        <View style={{
            marginTop:30,
        }}>
        </View>
    </View>
  )
}
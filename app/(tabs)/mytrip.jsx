import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'

import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {

    const [userTrips,setUserTrips]=useState([]);

  return (
    <View style={{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
        <Text style={{
            fontFamily:'poppins-bold',
            fontSize:35,
        }}>My Trips</Text>

        <Ionicons name="add-circle-sharp" size={35} color="black" />

        </View>
      {userTrips?.length==0?
        <StartNewTripCard/>
        :null
      }
    </View>
  )
}
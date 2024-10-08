import { View, Text } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

    const router=useRouter();

  return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:15,
    }}>

<Ionicons name="location-sharp" size={30} color="black" />
    <Text style={{
        fontSize:25,
        fontFamily:'poppins-medium',
        marginTop:10,
      }}>No trips planned yet</Text>

    <Text style={{
        fontSize:20,
        fontFamily:'poppins',
        textAlign:'center',
        color:Colors.GRAY,
      }}>Excited for your new adventure? Let’s create a memorable journey—start exploring below!</Text>

    <TouchableOpacity 
    onPress={()=>router.push('/create-trip/select-traveler')}
    style={{
        padding:10,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30,
    }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'poppins-medium',
            fontSize:18,
        }}>Start a new trip</Text>
    </TouchableOpacity>

    </View>
  )
}
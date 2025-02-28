import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{
      padding:15,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#f1f1f1',
      borderRadius:15,
    },selectedOption?.id==option?.id&&{borderWidth:3,
    backgroundColor:'#f8f8f8',
    }]}>
      <View style={{
        padding:20,
      }}>
      <Text style={{
        fontSize:20,
        fontFamily:'poppins-bold'
      }}>{option.title}</Text>
      <Text style={{
        fontSize:14,
        fontFamily:'poppins-medium',
        color:Colors.GRAY,
      }}>{option.desc}</Text>
    </View>
    <Text style={{
      fontSize:40,
    }}>
      {option.icon}
    </Text>

    </View>
  
  )
}
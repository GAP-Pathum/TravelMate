import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors';


import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name="mytrip" 
          options={{
            tabBarLabel:'My Trip',
            tabBarIcon:({color})=><FontAwesome6 name="mountain-sun" size={24} color={color}/>
          }}
        />
        <Tabs.Screen name="discover"  
          options={{
            tabBarLabel:'Discover',
            tabBarIcon:({color})=><Entypo name="globe" size={24} color={color}/>
          }}
        />
        <Tabs.Screen name="profile"  
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=><Ionicons name="people" size={24} color={color} />
          }}
        />
    </Tabs>
  )
}
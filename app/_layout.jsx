import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {CreateTripContext} from '../context/CreateTripContext';
import { useState } from "react";

export default function RootLayout() {

  useFonts({
    'poppins-bold':require('./../assets/fonts/Poppins-Bold.ttf'),
    'poppins-light':require('./../assets/fonts/Poppins-Light.ttf'),
    'poppins-medium':require('./../assets/fonts/Poppins-Medium.ttf'),
    'poppins':require('./../assets/fonts/Poppins-Regular.ttf')
  })

  const [tripData,setTripData]=useState([]);

  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false
      }} />
      <Stack.Screen name="(tabs)"  options={{
        headerShown:false
      }}/>
    </Stack>
    </CreateTripContext.Provider>
  );
}

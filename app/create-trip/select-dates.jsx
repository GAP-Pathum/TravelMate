import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, Component, useState, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {
  
    const navigation=useNavigation();
    const router=useRouter();

    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'',
        })
    },[])

    const onDateChange=(date,type)=>{
        console.log(date,type)
        if(type=='START_DATE'){
            setStartDate(moment(date))
        }
        else{
            setEndDate(moment(date))
        }
    }
    const onDateSelectionContinue=()=>{
        if(!startDate&&!endDate){
            ToastAndroid.show("Select Start and End date",ToastAndroid.LONG)
            return;
        }
        const totalNoOfDays=endDate.diff(startDate,'days')+1;
        console.log(totalNoOfDays);
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays,
    });

    router.push('/create-trip/select-budget')
    }
  
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
            }}>Travel Dates</Text>
            <View style={{
                marginTop:30,
            }}>
            <CalendarPicker onDateChange={onDateChange}
            allowRangeSelection={true} 
            minDate={new Date()}
            maxRangeDuration={10}
            selectedRangeStyle={{
                backgroundColor:Colors.PRIMARY
            }}
            selectedDayTextStyle={{
                color:Colors.WHITE
            }}
            />
            </View>
            <TouchableOpacity
                onPress={onDateSelectionContinue}
                style={{
                    marginTop:70,
                    padding:15,
                    backgroundColor:Colors.PRIMARY,
                    borderRadius:15,
            }}>
                <Text style={{
                    textAlign:'center',
                    color:Colors.WHITE,
                    fontFamily:'poppins',
                    fontSize:17,
                }}>Continue</Text>
            </TouchableOpacity>
    </View>
  )
}
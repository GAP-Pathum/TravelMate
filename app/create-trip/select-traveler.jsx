import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { SelectTravelerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveler() {

    const navigation = useNavigation();
    const router=useRouter();
    const [selectedTraveler,setSelectedTraveler]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });
    }, [])

    useEffect(()=>{
        setTripData({...tripData,
            traveler:selectedTraveler
    })
    },[selectedTraveler])

    useEffect(()=>{
        console.log(tripData);
    },[tripData])

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <Text style={{
                fontFamily: 'poppins-bold',
                fontSize: 35,
                marginTop: 20,
            }}>Who's Traveling</Text>

            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontFamily: 'poppins-bold',
                    fontSize: 24,
                }}>
                    Choose your travelers
                </Text>

                <FlatList
                    data={SelectTravelerList}
                    renderItem={({item,index}) => (  
                        <TouchableOpacity
                        onPress={()=>setSelectedTraveler(item)} style={{
                            marginVertical:10,
                        }}>
                            <OptionCard option={item} selectedTraveler={selectedTraveler}/>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity 
            onPress={()=>router.push('create-trip/select-dates')}
            style={{
                marginTop:10,
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

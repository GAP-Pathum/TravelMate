import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';

export default function SelectBudget() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });
    }, []);

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
            }}>Select Budget</Text>

            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={SelectBudgetOptions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setSelectedOption(item)}>
                            <OptionCard option={item} selectedOption={selectedOption} />
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                />
            </View>
        </View>
    );
}

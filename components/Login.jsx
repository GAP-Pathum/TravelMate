import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';


export default function Login() {

  const router=useRouter();

  return (
    <View>
      <Image 
        source={require('./../assets/images/login.jpg')} 
        style={{
          width: '100%',
          height: 550,
        }}
      />
      <View style={styles.container}>
        <Text style={{
          fontFamily: 'poppins-bold', 
          fontSize: 30,
          textAlign: 'center',
          marginTop: 10
        }}>
          AI Travel Planner
        </Text>

        <Text style={{
          fontFamily:'poppins',
          fontSize:20,
          textAlign:'center',
          color:Colors.GRAY,
          marginTop:20
        }}>
          Let AI plan your journey, creating personalized experiences and making travel seamless and unforgettable.
        </Text>
        
        <TouchableOpacity style={styles.button}
          onPress={()=>router.push('auth/sign-in')}
        >
          <Text style={{color:Colors.WHITE,
          textAlign:'center',
          fontFamily:'poppins',
          fontSize:17,
          }}>
          Get Started 
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.WHITE,
    marginTop: -15,
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'25%'
  }
});

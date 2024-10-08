import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { auth } from './../../../configs/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
    const navigation=useNavigation();
    const router=useRouter();

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const onSignIn=()=>{
        if(!email&&!password){
            ToastAndroid.show("Please enter the Email & Password !",ToastAndroid.LONG)
            return;
        }

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip/')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    if(errorCode=='auth/invalid-credential'){
        ToastAndroid.show('Enter the correct username & password!',ToastAndroid.LONG)
    }

  }); 
    }

  return (
    <View style={{
        padding:25,
        paddingTop:50,
        marginTop:50,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>

     <Text style={{
        fontFamily:'poppins-bold',
        fontSize:30
     }}>
     Let's Sign You In
     </Text>

     <Text style={{
        fontFamily:'poppins',
        fontSize:30,
        color:Colors.GRAY,
     }}>
     Welcome Back!
     </Text>

     <Text style={{
        fontFamily:'poppins',
        fontSize:20,
        color:Colors.GRAY,
     }}>
     You've been missed :(
     </Text>
        
    {/* Email */}
     <View style={{
        marginTop:50,
     }}>
        <Text style={{
            fontFamily:'poppins',
        }}>Email</Text>
        <TextInput 
        style={styles.input}
        onChangeText={(value)=>setEmail(value)}
        placeholder='Enter Email' />
     </View>

    {/* Password */}
     <View style={{
        marginTop:20,
     }}>
        <Text style={{
            fontFamily:'poppins',
        }}>Password</Text>
        <TextInput
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={(value)=>setPassword(value)}
        placeholder='Enter Email' />
     </View>

    {/* Signin button */}
    <TouchableOpacity 
    onPress={onSignIn}
    style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50,
    }}>
        <Text style={{
            color:Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'poppins',
        }}>
        Sign In
        </Text>
    </TouchableOpacity> 

    {/* create acc*/}
    <TouchableOpacity onPress={()=>router.replace('auth/sign-up')}
    style={{
        padding:20,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        borderWidth:1,
    }}>
        <Text style={{
            color:Colors.PRIMARY,
            textAlign: 'center',
            fontFamily: 'poppins',
            
        }}>
        Create Account
        </Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        fontFamily:'poppins'
    }
})
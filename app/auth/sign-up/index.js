import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { TextInput, TouchableOpacity } from 'react-native';
import { auth } from './../../../configs/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import this function

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const OnCreateAccount = () => {
        // Check if name, email, or password is empty
        if (!name || !email || !password) {
            ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
            return;
        }

        // Call Firebase auth method
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log('User created: ', user);

                // Optionally, save additional user information like `name` to the Firestore database

                // Navigate to a different screen if necessary
                ToastAndroid.show('Account created successfully!', ToastAndroid.LONG);
                router.replace('/mytrip');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error: ', errorCode, errorMessage);
                ToastAndroid.show(errorMessage, ToastAndroid.LONG);
            });
    };

    return (
        <View style={{
            padding: 25,
            paddingTop: 50,
            marginTop: 50,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}>
            <Text style={{
                fontFamily: 'poppins-bold',
                fontSize: 30
            }}>
                Let's Create New Account
            </Text>

            <Text style={{
                fontFamily: 'poppins',
                fontSize: 30,
                color: Colors.GRAY,
            }}>
                Welcome!
            </Text>

            {/* Name */}
            <View style={{
                marginTop: 50,
            }}>
                <Text style={{
                    fontFamily: 'poppins',
                }}>User Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Your Name'
                    onChangeText={(value) => setName(value)}
                />
            </View>

            {/* Email */}
            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontFamily: 'poppins',
                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    onChangeText={(value) => setEmail(value)}
                />
            </View>

            {/* Password */}
            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontFamily: 'poppins',
                }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Password'
                    onChangeText={(value) => setPassword(value)}
                />
            </View>

            {/* Create Account Button */}
            <TouchableOpacity
                onPress={OnCreateAccount}
                style={{
                    padding: 20,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 15,
                    marginTop: 50,
                }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontFamily: 'poppins',
                }}>
                    Create Account
                </Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-in')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 20,
                    borderWidth: 1,
                }}>
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                    fontFamily: 'poppins',
                }}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'poppins'
    }
});

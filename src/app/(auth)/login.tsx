import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Facebook,Google } from '@/src/assets/svgs';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/images/text-logo.png')} 
                style={styles.logo}
            />
            <Text style={styles.subtitle}>Sign in</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.rememberContainer}>
                <TouchableOpacity 
                    style={styles.checkbox}
                    onPress={() => setRememberMe(!rememberMe)}
                >
                    <View style={[styles.checkboxInner, rememberMe && styles.checkboxChecked]} />
                </TouchableOpacity>
                <Text style={styles.rememberText}>Remember me</Text>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>

            <TouchableOpacity 
                style={styles.signInButton}
                onPress={async() => {
                    await AsyncStorage.setItem('accessToken', 'Nhat')
                    router.navigate('/(tabs)')
                }}
            >
                <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>

            <TouchableOpacity style={styles.socialButton}>
                <Google/>
                <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Facebook/>
                <Text style={styles.socialButtonText}>Login with Facebook</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <Text style={styles.signupLink}>Sign up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#4B6BFB',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        borderRadius: 2,
    },
    checkboxChecked: {
        backgroundColor: '#4B6BFB',
    },
    rememberText: {
        marginLeft: 10,
    },
    forgotPassword: {
        marginLeft: 'auto',
        color: '#4B6BFB',
    },
    signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4B6BFB',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        marginVertical: 20,
        color: '#666',
    },
    socialButton: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        marginBottom: 15,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    socialButtonText: {
        fontSize: 16,
        marginLeft:10
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    signupText: {
        color: '#666',
    },
    signupLink: {
        color: '#4B6BFB',
    },
});

export default LoginScreen;
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Button, TextInput, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  // Replace with your actual validation logic
  if (email === 'pepe' && password === '1234') {
    navigation.navigate('Home'); // Navigate to HomeScreen
  } else {
    navigation.navigate('Home'); // Navigate to HomeScreen
    // console.error('Invalid credentials');
    // Handle invalid login (e.g., show an error message)
  }

  emailRef.current.clear();
  passwordRef.current.clear();
};
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        style={styles.fondo}
      >
        <Image
          source={require("../assets/img/logo.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.titulo}>Chef Cook</Text>
        <View style={styles.box}>
          <Text style={styles.text}>Email</Text>
          <View style={styles.text}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setText(text)}
              value={text}
              ref={emailRef}
            />
          </View>
          <Text style={styles.text}>Password</Text>
          <View style={styles.text}>
            <TextInput
              style={styles.input}
              onChangeText={(text2) => setText2(text2)}
              value={text2}
              ref={passwordRef}
            />
          </View>
          <View style={styles.text}>
            <Button title="Ingresar" onPress={handlePress} />
            <Text style={styles.textc}>Olvidaste tu Password? Presiona aqui</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:50,
    marginTop:-90,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000000',
    fontWeight: 'bold',
    textShadowColor: 'white', textShadowOffset: { width: 2, height: 2 }
    
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height:"100%",
  },
  logo:{
    marginTop:-100,
    width: "60%",
    height:"30%",
    
  },
  box:{
    width: 280,
    height: 500,
    borderWidth: 10,
    borderColor: '#cec09b',
    borderRadius: 10,
    backgroundColor: '#32cd32'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 35,
    paddingRight: 48,
    marginTop: 20,
    
  },
  textc:{
    marginTop:10,
    textAlign: "center",
  },
  input:{
    width: 200,
    height: 40,
    borderColor: '#000000',
    borderWidth: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 30,
    padding: 10,
    
  },

  });
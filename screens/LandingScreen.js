
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'


const LandingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <ImageBackground
            source={require('C:/Users/Mark Flake/Documents/audio-player/Capstone/images/nature1.jpg')}
            style={styles.backgroundImage}
          >
            <Text style={styles.title}>Travel A Go-Go</Text>
            <TouchableOpacity
              style={styles.enterButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.enterButtonText}>Enter</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }

  export default LandingScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
      color: '#fff',
    },
    enterButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#ff9900',
        marginTop: 20,
        width: '30%',
        alignItems:'center',
        justifyContent: 'center',
      },
      enterButtonText: {
        color: '#ff9900',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });
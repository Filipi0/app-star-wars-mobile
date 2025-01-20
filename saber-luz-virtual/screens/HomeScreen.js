// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao Sabre de Luz Virtual</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Saber')}
    >
      <Text style={styles.buttonText}>Iniciar Sabre</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default HomeScreen;

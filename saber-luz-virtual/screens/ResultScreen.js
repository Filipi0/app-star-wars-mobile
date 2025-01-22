// screens/ResultScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { activationCount } = route.params;

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Resultados dos Movimentos</Text>
      <Text style={styles.motionText}>O sabre foi ativado:</Text>
      <Text style={styles.activationCount}>{activationCount} vezes!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  motionText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  activationCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#7A0000',
    borderRadius: 10,
    width: '80%'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ResultScreen;

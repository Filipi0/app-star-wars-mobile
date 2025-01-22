// screens/ResultScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { activationCount } = route.params;

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Resultados dos Movimentos</Text>
      <Text style={styles.motionText}>O sabre foi ativado</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 30,
  },
  motionText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  activationCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginVertical: 20,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ResultScreen;
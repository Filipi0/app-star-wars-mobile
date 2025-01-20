// screens/ResultScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { activationCount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados dos Movimentos</Text>
      <Text style={styles.motionText}>O sabre foi ativado {activationCount} vezes!</Text>
    </View>
  );
};

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
  motionText: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
  },
});

export default ResultScreen;

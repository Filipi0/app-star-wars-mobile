// screens/ResultScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { motion } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados dos Movimentos</Text>
      <Text style={styles.motionText}>Último Movimento:</Text>
      <Text style={styles.motionText}>Eixo X: {motion.x.toFixed(2)}</Text>
      <Text style={styles.motionText}>Eixo Y: {motion.y.toFixed(2)}</Text>
      <Text style={styles.motionText}>Eixo Z: {motion.z.toFixed(2)}</Text>
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

// screens/SaberSelectionScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const sabers = [
  {
    id: 1,
    name: 'Sabre Azul',
    image: require('../assets/lightsaber-blue.png'),
    sound: require('../assets/saber.wav'),
  },
  {
    id: 2,
    name: 'Sabre Verde',
    image: require('../assets/lightsaber-green.png'),
    sound: require('../assets/saber.wav'),
  },
  {
    id: 3,
    name: 'Sabre Vermelho',
    image: require('../assets/lightsaber-red.png'),
    sound: require('../assets/saber.wav'),
  },
];

const SaberSelectionScreen = ({ navigation }) => {
  const selectSaber = (saber) => {
    navigation.navigate('Saber', { selectedSaber: saber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Sabre de Luz</Text>
      <View style={styles.saberList}>
        {sabers.map((saber) => (
          <TouchableOpacity
            key={saber.id}
            style={styles.saberButton}
            onPress={() => selectSaber(saber)}
          >
            <Image source={saber.image} style={styles.saberImage} resizeMode="contain"/>
            <Text style={styles.saberText}>{saber.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    color: '#FFF',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  saberList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
  },
  saberButton: {
    alignItems: 'center',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  saberImage: {
    width: 120,
    height: 240,
  },
  saberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SaberSelectionScreen;

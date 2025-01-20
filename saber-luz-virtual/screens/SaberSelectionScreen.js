// screens/SaberSelectionScreen.js
import { Sound } from 'expo-av/build/Audio';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const sabers = [
    {
      id: 1,
      name: 'Sabre Azul',
      image: require('../assets/sabre.png'), // Imagem do sabre
      sound: require('../assets/saber.wav'), // Arquivo de som associado
    },
    {
      id: 2,
      name: 'Sabre Vermelho',
      image: require('../assets/sabre.png'),
      sound: require('../assets/saber.wav'),
    },
    {
      id: 3,
      name: 'Sabre Verde',
      image: require('../assets/sabre.png'),
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
            <Image source={saber.image} style={styles.saberImage} />
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  saberList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  saberButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  saberImage: {
    width: 100,
    height: 200,
    marginBottom: 10,
  },
  saberText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default SaberSelectionScreen;

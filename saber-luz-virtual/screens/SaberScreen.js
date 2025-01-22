// SaberScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { Audio } from 'expo-av';

const SaberScreen = ({ route, navigation }) => {
  const selectedSaber = route.params?.selectedSaber;

  if (!selectedSaber) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erro</Text>
        <Text style={styles.subtitle}>Nenhum sabre selecionado.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SaberSelection')}
        >
          <Text style={styles.buttonText}>Voltar para Seleção</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [isActive, setIsActive] = useState(false);
  const [motion, setMotion] = useState({ x: 0, y: 0, z: 0 });
  const [activationCount, setActivationCount] = useState(0);
  const soundRef = useRef(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(selectedSaber.sound);
      soundRef.current = sound; // Armazena o som carregado na referência
    };
  
    loadSound();
  
    return () => {
      if (soundRef.current) soundRef.current.unloadAsync(); // Libera o som ao desmontar o componente
    };
  }, []);
  

  useEffect(() => {
    let subscription = null;

    if (isActive) {
      subscription = Accelerometer.addListener(async (data) => {
        setMotion(data);

        const intensity = Math.sqrt(data.x ** 2 + data.y ** 2 + data.z ** 2);
        if (intensity > 5 && soundRef.current) {
          await soundRef.current.replayAsync();
          setActivationCount((prev) => prev + 1);
        }
      });
    }

    return () => {
      if (subscription) subscription.remove();
    };
  }, [isActive]);

  const { x, y, z } = motion;

  return (
    <View style={styles.container}>
      <Image source={selectedSaber.image} style={styles.saberImage} />
      <Text style={styles.title}>{selectedSaber.name}</Text>
      <Text style={styles.subtitle}>Movimente o celular para ouvir o som!</Text>
      <Text style={styles.motionText}>Eixo X: {x.toFixed(2)}</Text>
      <Text style={styles.motionText}>Eixo Y: {y.toFixed(2)}</Text>
      <Text style={styles.motionText}>Eixo Z: {z.toFixed(2)}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isActive ? '#FF0000' : '#00FF00' }]}
        onPress={() => setIsActive(!isActive)}
      >
        <Text style={styles.buttonText}>{isActive ? 'Desativar Sabre' : 'Ativar Sabre'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Resultados', { activationCount })}
      >
        <Text style={styles.buttonText}>Ver Resultados</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#BBB',
    marginBottom: 10,
  },
  motionText: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
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
  saberImage: {
    width: 150,
    height: 300,
    marginBottom: 20,
  },
});

export default SaberScreen;

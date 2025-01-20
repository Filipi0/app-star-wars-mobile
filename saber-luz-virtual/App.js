// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SaberSelectionScreen from './screens/SaberSelectionScreen';
import SaberScreen from './screens/SaberScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="SaberSelection" component={SaberSelectionScreen} options={{ title: 'Escolha seu Sabre' }} />
        <Stack.Screen name="Saber" component={SaberScreen} options={{ title: 'Sabre de Luz' }} />
        <Stack.Screen name="Resultados" component={ResultScreen} options={{ title: 'Resultados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

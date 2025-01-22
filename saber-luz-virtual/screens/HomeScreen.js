import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => (
  <ImageBackground
    source={require("../assets/imagemFundo.jpg")}
    style={styles.background}
    imageStyle={{ opacity: 1 }} // Define a opacidade da imagem de fundo
  >
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.title}>Sabre de Luz Virtual</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Saber")}
      >
        <Text style={styles.buttonText}>Iniciar Sabre</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: "rgba(122, 0, 0, 1)",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default HomeScreen;

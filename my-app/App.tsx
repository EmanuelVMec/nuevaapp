import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  // Funciones para los botones
  const handleStart = () => {
    console.log("Iniciar lecciones");
    // Aquí puedes agregar la navegación a la pantalla de lecciones
  };

  const handleInfo = () => {
    console.log("Ver información");
    // Aquí puedes agregar la navegación a la pantalla de información
  };

  const handleSelectAge = () => {
    console.log("Elegir edad");
    // Aquí puedes agregar la lógica para seleccionar la edad
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <Text style={styles.header}>Matemática Básica</Text>

      {/* Imagen */}
      <Image
        source={require('./assets/splash-icono.png')}
        style={styles.image}
      />

      {/* Texto introductorio */}
      <Text style={styles.text}>
        Bienvenido a la app para aprender matemática básica. Aquí podrás 
        repasar operaciones, tablas y conceptos esenciales de forma sencilla y divertida.
      </Text>

      {/* Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleInfo}>
          <Text style={styles.buttonText}>Información</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSelectAge}>
          <Text style={styles.buttonText}>Elegir Edad</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

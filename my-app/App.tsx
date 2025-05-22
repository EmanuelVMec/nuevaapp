import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

import Iniciar from './Iniciar';
import Informacion from './Informacion';
import ElegirEdad from './ElegirEdad';

const Stack = createNativeStackNavigator();

export default function App() {
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              edadSeleccionada={edadSeleccionada}
              setEdadSeleccionada={setEdadSeleccionada}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Iniciar">
          {(props) => <Iniciar {...props} edadSeleccionada={edadSeleccionada} />}
        </Stack.Screen>
        <Stack.Screen name="Informacion" component={Informacion} />
        <Stack.Screen name="ElegirEdad">
          {(props) => (
            <ElegirEdad
              {...props}
              setEdadSeleccionada={setEdadSeleccionada}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, edadSeleccionada, setEdadSeleccionada }: any) {
  const handleIniciar = () => {
    if (!edadSeleccionada) {
      Alert.alert("Selecciona una edad", "Debes elegir una edad antes de comenzar.");
    } else {
      navigation.navigate('Iniciar');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matemática Básica</Text>

      <Image source={require('./assets/splash-icono.png')} style={styles.image} />

      <Text style={styles.text}>
        Bienvenido a la app para aprender matemática básica. Aquí podrás repasar operaciones, tablas y conceptos esenciales.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !edadSeleccionada && styles.buttonDisabled]}
          onPress={handleIniciar}
        >
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Informacion')}>
          <Text style={styles.buttonText}>Información</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ElegirEdad')}>
          <Text style={styles.buttonText}>Elegir Edad</Text>
        </TouchableOpacity>

        {edadSeleccionada && (
           <View style={styles.ageContainer}>
             <Text style={styles.selectedAge}>Edad seleccionada: {edadSeleccionada}</Text>
    
             <TouchableOpacity
             style={styles.removeButton}
              onPress={() => setEdadSeleccionada(null)}
              >
            <Text style={styles.removeButtonText}>Quitar edad</Text>
              </TouchableOpacity>
           </View>
    )}

      </View>
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
  buttonDisabled: {
  backgroundColor: '#ccc',
},

selectedAge: {
  marginTop: 10,
  color: '#2c3e50',
  fontSize: 14,
},
ageContainer: {
  marginTop: 15,
  alignItems: 'center',
},

removeButton: {
  marginTop: 8,
  backgroundColor: '#e74c3c',
  paddingHorizontal: 20,
  paddingVertical: 8,
  borderRadius: 10,
},

removeButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

});

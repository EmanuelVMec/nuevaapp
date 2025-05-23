// ElegirDificultad.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ElegirDificultad({ route, navigation }: any) {
  const { edadSeleccionada } = route.params;

  const seleccionarDificultad = (dificultad: string) => {
    navigation.navigate('Iniciar', {
      edadSeleccionada,
      dificultadSeleccionada: dificultad,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona la dificultad</Text>
      {['Fácil', 'Media', 'Difícil'].map((nivel) => (
        <TouchableOpacity
          key={nivel}
          style={styles.button}
          onPress={() => seleccionarDificultad(nivel.toLowerCase())}
        >
          <Text style={styles.buttonText}>{nivel}</Text>
        </TouchableOpacity>
      ))}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

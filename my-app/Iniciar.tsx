import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ejercicio from './Ejercicio';
import { ejerciciosPorEdad } from './ejercicios';

export default function Iniciar({ edadSeleccionada }: { edadSeleccionada: string | null }) {
  const [indiceEjercicio, setIndiceEjercicio] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);

  if (!edadSeleccionada) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Por favor, selecciona una edad antes de comenzar.</Text>
      </View>
    );
  }

  const ejercicios = ejerciciosPorEdad[edadSeleccionada] || [];

  const handleRespuesta = (correcta: boolean) => {
    if (correcta) {
      setPuntuacion(puntuacion + 1);
    }
  };

  const siguienteEjercicio = () => {
    if (indiceEjercicio + 1 < ejercicios.length) {
      setIndiceEjercicio(indiceEjercicio + 1);
    } else {
      alert(`¡Terminaste! Puntaje: ${puntuacion} de ${ejercicios.length}`);
      setIndiceEjercicio(0);
      setPuntuacion(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matemática Básica</Text>
      <Text style={styles.edad}>Edad seleccionada: <Text style={styles.edadValor}>{edadSeleccionada}</Text></Text>

      {ejercicios.length > 0 ? (
        <View style={styles.card}>
          <Text style={styles.preguntaNumero}>
            Pregunta {indiceEjercicio + 1} de {ejercicios.length}
          </Text>

          <View style={styles.contenido}>
            <Ejercicio
              key={indiceEjercicio}
              ejercicio={ejercicios[indiceEjercicio]}
              onRespuesta={handleRespuesta}
            />

            <TouchableOpacity style={styles.botonSiguiente} onPress={siguienteEjercicio}>
              <Text style={styles.botonTexto}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={styles.text}>No hay ejercicios para esta edad.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  edad: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 20,
  },
  edadValor: {
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  preguntaNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  contenido: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonSiguiente: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '60%',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
